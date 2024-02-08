// Utviklet av Halvor Vilnes
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import NyAdminBrukerForm from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerTextFields";
import NyAdminBrukerButton from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerButton";
import {
  SuccessAlert,
  ErrorAlert,
  HashingErrorAlert,
} from "@/components/Admin/Bruker/NyBruker/Alerts";
import bcryptHashing from "@/components/Hash/Hashing";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
export const ADMIN_PASSORD_LENGTH = 7;
export default function NyAdminBrukerSkjema({ onGoBack }) {
  const [formData, setFormData] = React.useState({
    Brukernavn: "",
    Epost: "",
    Passord: "",
    GjentaPassord: "",
  });

  const [visSuksessAlert, setVisSuksessAlert] = React.useState(false);
  const [visErrorAlert, setVisErrorAlert] = React.useState(false);
  const [visHashingErrorAlert, setVisHashingErrorAlert] = React.useState(false);

  const handleSave = async () => {
    // console.log("Lagrer data til database:", formData);

    const docRef = doc(db, dbCollectionAdminBrukere, formData.Brukernavn);
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
        await setDoc(doc(db, dbCollectionAdminBrukere, formData.Brukernavn), {
          Brukernavn: formData.Brukernavn,
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
      Brukernavn: "",
      Epost: "",
      Passord: "",
      GjentaPassord: "",
    });
  };
  const handleReturn = () => {
    onGoBack();
  };
  const isFormValid =
    formData.Brukernavn !== "" &&
    Epost !== "" &&
    formData.Passord !== "" &&
    formData.GjentaPassord !== "" &&
    formData.Passord === formData.GjentaPassord &&
    formData.Passord.length >= ADMIN_PASSORD_LENGTH;

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
          <NyAdminBrukerButton
            onSave={handleSave}
            isFormValid={isFormValid}
            onFormReset={handleFormReset}
            onReturn={handleReturn}
          />
          <SuccessAlert vis={visSuksessAlert} />
          <ErrorAlert vis={visErrorAlert} />
          <HashingErrorAlert vis={visHashingErrorAlert} />
        </Item>
      </Box>
    </Box>
  );
}
