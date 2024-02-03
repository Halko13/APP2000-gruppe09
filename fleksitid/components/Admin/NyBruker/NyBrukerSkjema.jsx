// Utviklet av Halvor Vilnes
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import NyBrukerForm from "@/components/Admin/NyBruker/NyBrukerTextFields";
import NyBrukerButton from "@/components/Admin/NyBruker/NyBrukerButton";
import { SuccessAlert, ErrorAlert } from "@/components/Admin/NyBruker/Alerts";
import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";
import bcryptHashing from "@/components/Hash/Hashing";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { dbCollectionBrukere } from "@/firebase/firebaseConfig";
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

    const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setVisErrorAlert(true);
      setVisSuksessAlert(false);

      setTimeout(() => {
        setVisErrorAlert(false);
      }, 3000);
    } else {
      const hashedPassword = await bcryptHashing(formData.Passord);
      await setDoc(doc(db, dbCollectionBrukere, formData.AnsattNr), {
        AnsattNr: formData.AnsattNr,
        Fornavn: formData.Fornavn,
        Etternavn: formData.Etternavn,
        Stilling: formData.Stilling,
        AntallJobbTimer: formData.AntallJobbTimer,
        // Passord: formData.Passord, //Skal være passord når hashing fungerer
        Passord: hashedPassword, //Skal være passord når hashing fungerer
        Innlogget: false,
        ErAdmin: formData.ErAdmin,
        Opprettet: serverTimestamp(),
        SistEndret: serverTimestamp(),
        Timebank: Number(formData.AntallJobbTimer),
      });
      setVisSuksessAlert(true);
      setVisErrorAlert(false);

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
            <SuccessAlert vis={visSuksessAlert} />
            <ErrorAlert vis={visErrorAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
