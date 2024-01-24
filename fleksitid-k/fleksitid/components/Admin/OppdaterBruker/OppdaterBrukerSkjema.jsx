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
} from "@/components/Admin/OppdaterBruker/Alerts";

import { db } from "@/app/firebaseConfig";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

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

  const dbCollection = "Brukere";

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
          const nyData = {
            ...formData,
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

          // alert("Oppdatert bruker");

          // onGoBack();
          setVisOppdatertBrukerSuccsessAlert(true);
          setTimeout(() => {
            onGoBack();
          }, 3000);
        } else {
          setVisOppdatertBrukerErrorAlert(true);
          setTimeout(() => {
            onGoBack();
          }, 3000);
        }
      } else {
        //Ansatt nummer har ikke endret seg, men andre data har
        const docRef = doc(db, dbCollection, userData.AnsattNr);
        const oppdatertData = {
          ...formData,
          Innlogget: false,
        };
        // Lagrer ikke gjenta passord i database
        delete oppdatertData.GjentaPassord;

        await setDoc(docRef, oppdatertData);

        // alert("Oppdatert bruker");
        setVisOppdatertBrukerSuccsessAlert(true);
        setTimeout(() => {
          onGoBack();
        }, 3000);
      }
    } else {
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
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
