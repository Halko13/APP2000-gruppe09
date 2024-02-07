// Utviklet av Halvor Vilnes
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import NyAdminBrukerForm from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerTextFields";
import NyBrukerButton from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerButton";
import {
  SuccessAlert,
  ErrorAlert,
  HashingErrorAlert,
} from "@/components/Admin/Bruker/NyBruker/Alerts";
import bcryptHashing from "@/components/Hash/Hashing";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { dbCollectionBrukere } from "@/firebase/firebaseConfig";
import { dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
export const adminPassordLength = 7;
export default function NyAdminBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
    Epost: "",
    Passord: "",
    GjentaPassord: "",
  });

  const [visSuksessAlert, setVisSuksessAlert] = React.useState(false);
  const [visErrorAlert, setVisErrorAlert] = React.useState(false);
  const [visHashingErrorAlert, setVisHashingErrorAlert] = React.useState(false);

  const handleSave = async () => {
    console.log("Lagrer data til database:", formData);

    const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setVisErrorAlert(true);
      setVisSuksessAlert(false);
      setVisHashingErrorAlert(false);

      setTimeout(() => {
        setVisErrorAlert(false);
      }, 3000);
    } else {
      try {
        const hashedPassword = await bcryptHashing(formData.Passord);
        await setDoc(doc(db, dbCollectionAdminBrukere, formData.AnsattNr), {
          AnsattNr: formData.AnsattNr,
          Epost: formData.Epost,
          Passord: hashedPassword,
          Opprettet: serverTimestamp(),
          SistEndret: serverTimestamp(),
        });
      } catch (error) {
        setVisHashingErrorAlert(true);
        setVisSuksessAlert(false);
        setVisErrorAlert(false);
        setTimeout(() => {
          setVisHashingErrorAlert(false);
        }, 3000);
      }
      setVisSuksessAlert(true);
      setVisErrorAlert(false);
      setVisHashingErrorAlert(false);

      setTimeout(() => {
        setVisSuksessAlert(false);
      }, 3000);
    }
    handleFormReset();
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: "",
      Epost: "",
      Passord: "",
      GjentaPassord: "",
    });
  };

  const isFormValid =
    formData.AnsattNr !== "" &&
    Epost !== "" &&
    formData.Passord !== "" &&
    formData.GjentaPassord !== "" &&
    formData.Passord === formData.GjentaPassord &&
    formData.Passord.length >= adminPassordLength;

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Item>
          <NyAdminBrukerForm formData={formData} onChange={setFormData} />
          <NyBrukerButton
            onSave={handleSave}
            isFormValid={isFormValid}
            onFormReset={handleFormReset}
          />
          <SuccessAlert vis={visSuksessAlert} />
          <ErrorAlert vis={visErrorAlert} />
          <HashingErrorAlert vis={visHashingErrorAlert} />
        </Item>
      </Box>
    </Box>
  );
}
