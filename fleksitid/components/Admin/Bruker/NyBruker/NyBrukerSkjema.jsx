// Utviklet av Halvor Vilnes
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import NyBrukerForm from "@/components/Admin/Bruker/NyBruker/NyBrukerTextFields";
import NyBrukerButton from "@/components/Admin/Bruker/NyBruker/NyBrukerButton";
import {
  SuccessAlert,
  ErrorAlert,
  HashingErrorAlert,
} from "@/components/Admin/Bruker/NyBruker/Alerts";
import { PASSWORD_LENGTH } from "@/components/Admin/Bruker/NyBruker/NyBrukerTextFields";
import bcryptHashing from "@/components/Hash/Hashing";
import { db, dbCollectionBrukere } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
export default function NyBrukerSkjema({ onGoBack }) {
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
    Fornavn: "",
    Etternavn: "",
    Epost: "",
    Stilling: "",
    Avdeling: "",
    AntallJobbTimer: "",
    Passord: "",
    GjentaPassord: "",
  });

  const [visSuksessAlert, setVisSuksessAlert] = React.useState(false);
  const [visErrorAlert, setVisErrorAlert] = React.useState(false);
  const [visHashingErrorAlert, setVisHashingErrorAlert] = React.useState(false);

  // const handleSave = async () => {
  //   console.log("Lagrer data til database:", formData);

  //   const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     setVisErrorAlert(true);
  //     setVisSuksessAlert(false);
  //     setVisHashingErrorAlert(false);

  //     setTimeout(() => {
  //       setVisErrorAlert(false);
  //     }, 3000);
  //   } else {
  //     try {
  //       const hashedPassword = await bcryptHashing(formData.Passord);
  //       await setDoc(doc(db, dbCollectionBrukere, formData.AnsattNr), {
  //         AnsattNr: formData.AnsattNr,
  //         Fornavn: formData.Fornavn,
  //         Etternavn: formData.Etternavn,
  //         Epost: formData.Epost,
  //         Stilling: formData.Stilling,
  //         Avdeling: formData.Avdeling,
  //         AntallJobbTimer: formData.AntallJobbTimer,
  //         Passord: hashedPassword,
  //         Opprettet: serverTimestamp(),
  //         SistEndret: serverTimestamp(),
  //         TimeBank: Number(formData.AntallJobbTimer),
  //       });
  //     } catch (error) {
  //       setVisHashingErrorAlert(true);
  //       setVisSuksessAlert(false);
  //       setVisErrorAlert(false);
  //       setTimeout(() => {
  //         setVisHashingErrorAlert(false);
  //       }, 3000);
  //     }
  //     setVisSuksessAlert(true);
  //     setVisErrorAlert(false);
  //     setVisHashingErrorAlert(false);

  //     setTimeout(() => {
  //       setVisSuksessAlert(false);
  //     }, 3000);
  //   }
  //   handleFormReset();
  // };
  const handleSave = async () => {
    console.log("Lagrer data til database:", formData);

    try {
      const response = await fetch("/api/nyBruker", {
        // replace 'your-endpoint' with your actual endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setVisSuksessAlert(true);
        setVisErrorAlert(false);
        setVisHashingErrorAlert(false);
        console.log("body1: ");
      } else {
        setVisErrorAlert(true);
        setVisSuksessAlert(false);
        setVisHashingErrorAlert(false);
        console.log("body2: ");
      }
    } catch (error) {
      setVisErrorAlert(true);
      setVisSuksessAlert(false);
      setVisHashingErrorAlert(false);
      console.log("body3: ");
    }

    setTimeout(() => {
      setVisSuksessAlert(false);
      setVisErrorAlert(false);
    }, 3000);

    handleFormReset();
  };
  const handleFormReset = () => {
    setFormData({
      AnsattNr: "",
      Fornavn: "",
      Etternavn: "",
      Epost: "",
      Stilling: "",
      Avdeling: "",
      AntallJobbTimer: "",
      Passord: "",
      GjentaPassord: "",
    });
  };
  const handleReturn = () => {
    onGoBack();
  };
  const isFormValid =
    formData.AnsattNr !== "" &&
    formData.Fornavn !== "" &&
    formData.Etternavn !== "" &&
    formData.Epost !== "" &&
    formData.Stilling !== "" &&
    formData.Avdeling !== "" &&
    formData.Passord !== "" &&
    formData.GjentaPassord !== "" &&
    formData.Passord === formData.GjentaPassord &&
    formData.Passord.length === PASSWORD_LENGTH;

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
          <NyBrukerForm formData={formData} onChange={setFormData} />
          <NyBrukerButton
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
