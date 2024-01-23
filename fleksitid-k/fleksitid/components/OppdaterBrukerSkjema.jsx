// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import OppdaterBrukerForm from "@/components/OppdaterBrukerTextFields";
import OppdaterBrukerButton from "@/components/OppdaterBrukerButton";
import { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";
import { db } from "@/app/firebaseConfig";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

export default function OppdaterBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);

  const dbCollection = "Brukere";

  const handleSave = async () => {
    console.log("Saving data to the database:", formData);

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
        const newDocRef = doc(db, dbCollection, formData.AnsattNr);
        const newDocSnap = await getDoc(newDocRef);

        if (!newDocSnap.exists()) {
          // Oppdaterer data med ny ansattNr
          await setDoc(newDocRef, {
            ...formData,
            Innlogget: false,
          });

          // Sletter gammelt dokument for å ikke ha flere dokumenter for samme ansatt
          // https://firebase.google.com/docs/firestore/manage-data/delete-data

          const oldDocRef = doc(db, dbCollection, userData.AnsattNr);
          const oldDocSnap = await getDoc(oldDocRef);
          if (oldDocSnap.exists()) {
            await deleteDoc(oldDocRef);
            console.log(
              "Slettet gammelt dokument med ansattNr: ",
              userData.AnsattNr
            );
          } else {
            alert("Oppdatert bruker");
          }

          // Reset the form data after saving
          onGoBack();
        }
        alert("Kan ikke endre til et ansatt nummer som finnes fra før");
      } else {
        //Ansatt nummer har ikke endret seg, men andre data har
        const docRef = doc(db, dbCollection, userData.AnsattNr);
        await setDoc(docRef, {
          ...formData,
          Innlogget: false,
        });

        alert("Oppdatert bruker");

        // Reset the form data after saving
        onGoBack();
      }
    } else {
      // No changes, go back
      console.log("No changes");
      // onGoBack();
    }
  };

  const handleFormReturn = () => {
    onGoBack(); // Go back to FinnBrukerSkjema
  };

  const isFormValid =
    formData.AnsattNr !== "" &&
    formData.Fornavn !== "" &&
    formData.Etternavn !== "" &&
    formData.Stilling !== "" &&
    ((formData.Password === userData.Password &&
      formData.GjentaPassword === userData.GjentaPassword) || // Passord ikke endret, vil ikke være 6 tegn etter hashing
      (formData.Password.length === PASSWORD_LENGTH &&
        formData.Password === formData.GjentaPassword));

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
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
