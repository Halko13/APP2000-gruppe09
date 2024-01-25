// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import OppdaterBrukerForm from "@/components/Admin/OppdaterBruker/OppdaterBrukerTextFields";
import OppdaterBrukerButton from "@/components/Admin/OppdaterBruker/OppdaterBrukerButton";
import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";
import {
  OppdatertBrukerSuccsessAlert,
  OppdatertBrukerErrorAlert,
  OppdatertBrukerInfoAlert,
} from "@/components/Admin/OppdaterBruker/Alerts";

import { db } from "@/app/firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { dbCollection } from "@/app/firebaseConfig";
export default function OppdaterBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);

  // Oppdaterer formData til nye ansattNr
  React.useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const [visOppdatertBrukerSuccsessAlert, setVisOppdatertBrukerSuccsessAlert] =
    React.useState(false);
  const [visOppdatertBrukerErrorAlert, setVisOppdatertBrukerErrorAlert] =
    React.useState(false);
  const [visOppdatertBrukerInfoAlert, setVisOppdatertBrukerInfoAlert] =
    React.useState(false);
  const handleSave = async () => {
    // Sjekker hvis det er noen endring
    // Fikk kuttet ned flere && if setning ved hjelp av chatGPT
    // Sjekket hver verdi mot hverandre
    const isDataChanged = Object.keys(userData).some(
      (key) => userData[key] !== formData[key]
    );

    // Hente data fra firestore database
    // https://firebase.google.com/docs/firestore/manage-data/add-data
    if (isDataChanged) {
      // Sjekket hvis ansattNr har endret seg
      if (formData.AnsattNr !== userData.AnsattNr) {
        // Sjekker hvis ansattNr finnes fra før
        const nyDocRef = doc(db, dbCollection, formData.AnsattNr);
        const nyDocSnap = await getDoc(nyDocRef);
        if (!nyDocSnap.exists()) {
          // Oppdaterer data med ny ansattNr
          // Sjekk om antall jobb timer endrer seg
          if (formData.AntallJobbTimer !== userData.AntallJobbTimer) {
            const newTimebankVerdi = Number(formData.AntallJobbTimer);
            formData.Timebank = newTimebankVerdi;
          }

          const nyData = {
            ...formData,
            SistEndret: serverTimestamp(),
            Innlogget: false,
          };
          // Lagrer ikke gjenta passord i database
          delete nyData.GjentaPassord;
          await setDoc(nyDocRef, nyData);

          // Sletter gammelt dokument for å ikke ha flere dokumenter for samme ansatt
          // https://firebase.google.com/docs/firestore/manage-data/delete-data

          const gammelDocRef = doc(db, dbCollection, userData.AnsattNr);
          const gammelDocSnap = await getDoc(gammelDocRef);
          if (gammelDocSnap.exists()) {
            await deleteDoc(gammelDocRef);
            console.log(
              "Slettet gammelt dokument med ansattNr: ",
              userData.AnsattNr
            );
          }
          setVisOppdatertBrukerSuccsessAlert(true);
          setVisOppdatertBrukerErrorAlert(false);
          setVisOppdatertBrukerInfoAlert(false);
          setTimeout(() => {
            onGoBack();
          }, 3000);
        } else {
          // Finnes allerde ansatt nummer
          //
          setVisOppdatertBrukerErrorAlert(true);
          setVisOppdatertBrukerSuccsessAlert(false);
          setVisOppdatertBrukerInfoAlert(false);
        }
      } else {
        // Ansatt nummer har ikke endret seg, men andre data har
        const docRef = doc(db, dbCollection, userData.AnsattNr);

        if (formData.AntallJobbTimer !== userData.AntallJobbTimer) {
          const newTimebankVerdi = Number(formData.AntallJobbTimer);
          formData.Timebank = newTimebankVerdi;
        }

        const oppdatertData = {
          ...formData,
          SistEndret: serverTimestamp(),
          Innlogget: false,
        };
        // Lagrer ikke gjenta passord i database
        delete oppdatertData.GjentaPassord;

        await setDoc(docRef, oppdatertData);

        setVisOppdatertBrukerSuccsessAlert(true);
        setVisOppdatertBrukerErrorAlert(false);
        setVisOppdatertBrukerInfoAlert(false);
        setTimeout(() => {
          onGoBack();
        }, 3000);
      }
    } else {
      setVisOppdatertBrukerInfoAlert(true);
      setVisOppdatertBrukerErrorAlert(false);
      setVisOppdatertBrukerSuccsessAlert(false);
      console.log("Ingen ting endret");
    }
  };
  const handleFormReturn = () => {
    onGoBack();
  };

  const isFormValid =
    formData.AnsattNr !== "" &&
    formData.Fornavn !== "" &&
    formData.Etternavn !== "" &&
    formData.Stilling !== "" &&
    ((formData.Passord === userData.Passord &&
      formData.GjentaPassord === userData.GjentaPassord) || // Passord ikke endret, vil ikke være 6 tegn etter hashing
      (formData.Passord.length === PASSWORD_LENGTH &&
        formData.Passord === formData.GjentaPassord));

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
            <OppdaterBrukerForm formData={formData} onChange={setFormData} />
            <OppdaterBrukerButton
              onSave={handleSave}
              isFormValid={isFormValid}
              onFormReturn={handleFormReturn}
            />
            <OppdatertBrukerSuccsessAlert
              vis={visOppdatertBrukerSuccsessAlert}
            />
            <OppdatertBrukerErrorAlert vis={visOppdatertBrukerErrorAlert} />
            <OppdatertBrukerInfoAlert vis={visOppdatertBrukerInfoAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
