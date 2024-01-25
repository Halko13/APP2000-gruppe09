// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SlettBrukerTextField from "@/components/Admin/SlettBruker/SlettBrukerTextField";
import SlettBrukerButton from "@/components/Admin/SlettBruker/SlettBrukerButton";
import { Item } from "@/hooks/useFormStyle";
import { db } from "@/app/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { dbCollection } from "@/app/firebaseConfig";
import { SlettetBrukerSuccsessAlert } from "@/components/Admin/SlettBruker/Alerts";

export default function SlettBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);
  const [visSlettetBrukerSuccsessAlert, setVisSlettetBrukerSuccsessAlert] =
    React.useState(false);

  const handleSlettBruker = async () => {
    console.log("Sletter data fra database:", formData);

    // Hentet fra firestore doc
    //https://firebase.google.com/docs/firestore/manage-data/delete-data
    await deleteDoc(doc(db, dbCollection, formData.AnsattNr));
    setVisSlettetBrukerSuccsessAlert(true);

    setTimeout(() => {
      onGoBack();
    }, 3000);
  };

  const handleFormReturn = () => {
    onGoBack();
  };

  return (
    <Box sx={{ width: 0.5 }} alignItems={"center"} style={{ margin: "auto" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1fr, 1fr)"
        gap={2}
        alignItems={"center"}
        style={{ margin: "auto" }}
      >
        <Box gridColumn="span 1">
          <Item>
            <SlettBrukerTextField formData={formData} />

            <SlettBrukerButton
              onDelete={handleSlettBruker}
              handleFormReturn={handleFormReturn}
            />
            <SlettetBrukerSuccsessAlert vis={visSlettetBrukerSuccsessAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
