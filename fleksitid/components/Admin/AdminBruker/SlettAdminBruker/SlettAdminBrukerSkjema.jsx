// Utviklet av Halvor Vilnes

"use client";
// React
import * as React from "react";
// MUI Components
import Box from "@mui/material/Box";
// Components
import SlettAdminBrukerTextField from "@/components/Admin/AdminBruker/SlettAdminBruker/SlettAdminBrukerTextField";
import SlettAdminBrukerButton from "@/components/Admin/AdminBruker/SlettAdminBruker/SlettAdminBrukerButton";
import { SlettetAdminBrukerSuccsessAlert } from "@/components/Admin/AdminBruker/SlettAdminBruker/Alerts";
// DB import
import { Item } from "@/hooks/useFormStyle";
import { db, dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default function SlettAdminBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);
  const [
    visSlettetAdminBrukerSuccsessAlert,
    setVisSlettetAdminBrukerSuccsessAlert,
  ] = React.useState(false);

  const handleSlettBruker = async () => {
    console.log("Sletter data fra database:", formData);

    // Hentet fra firestore doc
    //https://firebase.google.com/docs/firestore/manage-data/delete-data
    await deleteDoc(doc(db, dbCollectionAdminBrukere, formData.Brukernavn));
    setVisSlettetAdminBrukerSuccsessAlert(true);

    setTimeout(() => {
      onGoBack();
    }, 3000);
  };
  const handleReturn = () => {
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
            <SlettAdminBrukerTextField formData={formData} />

            <SlettAdminBrukerButton
              onDelete={handleSlettBruker}
              handleFormReturn={handleReturn}
            />
            <SlettetAdminBrukerSuccsessAlert
              vis={visSlettetAdminBrukerSuccsessAlert}
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
