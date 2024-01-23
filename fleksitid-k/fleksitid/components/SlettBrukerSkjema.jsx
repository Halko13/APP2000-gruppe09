// SlettBrukerSkjema.js
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SlettBrukerTextField from "@/components/SlettBrukerTextField";
import SlettBrukerButton from "@/components/SlettBrukerButton";
import { Item } from "@/hooks/useFormStyle";
import { db } from "@/app/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default function SlettBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);

  const handleSlettBruker = async () => {
    console.log("Sletter data fra database:", formData);
    // // Sletter data fra database
    // Hentet fra firestore doc
    //https://firebase.google.com/docs/firestore/manage-data/delete-data
    await deleteDoc(doc(db, "Brukere", formData.AnsattNr));
    alert("Slettet bruker");
    resetForm();
    onGoBack(); // Go back to FinnBrukerSkjema
  };

  const handleFormReturn = () => {
    resetForm();
    onGoBack(); // Go back to FinnBrukerSkjema
  };
  const resetForm = () => {
    setFormData({
      AnsattNr: "",
      Fornavn: "",
      Etternavn: "",
      Stilling: "",
      antallJobbtimer: "",
    });
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
          </Item>
          <Item>
            <SlettBrukerButton
              onDelete={handleSlettBruker}
              handleFormReturn={handleFormReturn}
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
