// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
// MUI imports
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";

// Components imports
import NyBrukerForm from "@/components/Admin/NyBruker/NyBrukerTextFields";
import NyBrukerButton from "@/components/Admin/NyBruker/NyBrukerButton";
import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";

// DB import
import { db } from "@/app/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function NyBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
    Fornavn: "",
    Etternavn: "",
    Stilling: "",
    AntallJobbTimer: "",
    Passord: "",
    GjentaPassord: "",
    ErAdmin: false,
  });

  const handleSave = async () => {
    console.log("Lagrer data til database:", formData);

    // Sjekke om finnes fra før
    // Fra firestore doc
    // https://firebase.google.com/docs/firestore/query-data/get-data
    const docRef = doc(db, "Brukere", formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      alert("Ansatt nummer finnes fra før");
    } else {
      // Setter data inn i firestore
      // Hentet fra firestore doc
      // https://firebase.google.com/docs/firestore/manage-data/add-data
      await setDoc(doc(db, "Brukere", formData.AnsattNr), {
        AnsattNr: formData.AnsattNr,
        Fornavn: formData.Fornavn,
        Etternavn: formData.Etternavn,
        Stilling: formData.Stilling,
        AntallJobbTimer: formData.AntallJobbTimer,
        Passord: formData.Passord,
        Innlogget: false,
        ErAdmin: formData.ErAdmin,
      });
      alert("Ny bruker lagt til");
    }
    // Reset skjema etter opprettelse
    handleFormReset();
  };

  const handleFormReset = () => {
    // Reset the form data
    setFormData({
      AnsattNr: "",
      Fornavn: "",
      Etternavn: "",
      Stilling: "",
      AntallJobbTimer: "",
      Passord: "",
      GjentaPassord: "",
      ErAdmin: false,
    });
  };

  const isFormValid =
    formData.AnsattNr !== "" &&
    formData.Fornavn !== "" &&
    formData.Etternavn !== "" &&
    formData.Stilling !== "" &&
    formData.Passord !== "" &&
    formData.GjentaPassord !== "" &&
    formData.Passord === formData.GjentaPassord &&
    formData.Passord.length === PASSWORD_LENGTH;

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
            <NyBrukerForm formData={formData} onChange={setFormData} />
            <NyBrukerButton
              onSave={handleSave}
              isFormValid={isFormValid}
              onFormReset={handleFormReset}
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
