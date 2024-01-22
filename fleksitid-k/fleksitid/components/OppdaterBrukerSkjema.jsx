// OppdaterBrukerSkjema.jsx
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

  const handleSave = async () => {
    console.log("Saving data to the database:", formData);

    // Check if there are any changes
    const isDataChanged = Object.keys(userData).some(
      (key) => userData[key] !== formData[key]
    );
    if (isDataChanged) {
      // Check if AnsattNr has changed
      if (formData.AnsattNr !== userData.AnsattNr) {
        // Check if the new AnsattNr already exists in the database
        const newDocRef = doc(db, "Brukere", formData.AnsattNr);
        const newDocSnap = await getDoc(newDocRef);

        if (newDocSnap.exists()) {
          alert("Cannot change AnsattNr. Ansatt nummer finnes fra før");
          return;
        }

        // Update the data with the new AnsattNr
        await setDoc(newDocRef, {
          ...formData,
          Innlogget: false,
        });

        // Delete the old document
        const oldDocRef = doc(db, "Brukere", userData.AnsattNr);
        const oldDocSnap = await getDoc(oldDocRef);
        if (oldDocSnap.exists()) {
          await deleteDoc(oldDocRef);
          console.log("Deleted old document with AnsattNr:", userData.AnsattNr);
        }

        alert("Oppdatert bruker");

        // Reset the form data after saving
        onGoBack();
      } else {
        // AnsattNr hasn't changed, update the document
        const docRef = doc(db, "Brukere", userData.AnsattNr);
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
      onGoBack();
    }
  };

  const handleFormReturn = () => {
    resetForm();
    onGoBack(); // Go back to FinnBrukerSkjema
  };

  const resetForm = () => {
    setFormData({
      AnsattNr: userData.AnsattNr || "",
      Fornavn: userData.Fornavn || "",
      Etternavn: userData.Etternavn || "",
      Stilling: userData.Stilling || "",
      AntallJobbtimer: userData.AntallJobbtimer || "",
      Password: userData.Password || "",
      GjentaPassword: userData.GjentaPassword || "",
      ErAdmin: userData.ErAdmin || false,
    });
  };

  const isFormValid =
    formData.AnsattNr !== "" &&
    formData.Fornavn !== "" &&
    formData.Etternavn !== "" &&
    formData.Stilling !== "" &&
    formData.Password &&
    formData.GjentaPassword &&
    formData.Password === formData.GjentaPassword &&
    formData.Password.length === PASSWORD_LENGTH;

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
