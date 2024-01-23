// NyBrukerSkjema.js
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import NyBrukerForm from "@/components/Admin/NyBruker/NyBrukerTextFields";
import NyBrukerButton from "@/components/Admin/NyBruker/NyBrukerButton";
import { SuccessAlert, ErrorAlert } from "@/components/Admin/NyBruker/Alerts";
import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";
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

  const [visSuksessAlert, setVisSuksessAlert] = React.useState(false);
  const [visErrorAlert, setVisErrorAlert] = React.useState(false);

  const handleSave = async () => {
    console.log("Lagrer data til database:", formData);

    const docRef = doc(db, "Brukere", formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setVisErrorAlert(true);

      setTimeout(() => {
        setVisSuksessAlert(false);
      }, 5000);
      // alert("Ansatt nummer finnes fra før");
    } else {
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
      setVisSuksessAlert(true);

      // Set a timer to hide the alert after 10 seconds
      setTimeout(() => {
        setVisSuksessAlert(false);
      }, 5000);
    }
    handleFormReset();
  };

  const handleFormReset = () => {
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
            <SuccessAlert show={visSuksessAlert} />
            <ErrorAlert show={visErrorAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
