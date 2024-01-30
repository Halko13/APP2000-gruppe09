// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";
import {
  ByttPassordSuccsessAlert,
  ByttPassordErrorAlert,
} from "@/components/Admin/OppdaterBruker/ByttPassord/Alerts";
import ByttPassordForm from "@/components/Admin/OppdaterBruker/ByttPassord/ByttPassordTextFields";
import ByttPassordButton from "@/components/Admin/OppdaterBruker/ByttPassord/ByttPassordButton";
import ByttPassordTittel from "@/components/Admin/OppdaterBruker/ByttPassord/ByttPassordTittel";
// DB
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { dbCollectionBrukere } from "@/firebase/firebaseConfig";
export default function ByttPassordSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState({
    ...userData,
    Passord: "",
    GjentaPassord: "",
  });

  const [visByttPassordSuccsessAlert, setVisByttPassordSuccsessAlert] =
    React.useState(false);
  // if()

  const handleSave = async () => {
    console.log("Endrer passord i database");
    await setDoc(
      doc(db, dbCollectionBrukere, formData.AnsattNr),
      { Passord: formData.Passord, SistEndret: serverTimestamp() },
      { merge: true }
    );
    setVisByttPassordSuccsessAlert(true);
    setTimeout(() => {
      onGoBack();
    }, 3000);
  };

  const handleFormReturn = () => {
    console.log("Returnerer til oppdater bruker skjema");
    onGoBack();
  };
  const isFormValid =
    (formData.Passord === userData.Passord &&
      formData.GjentaPassord === userData.GjentaPassord) || // Passord ikke endret, vil ikke være 6 tegn etter hashing
    (formData.Passord.length === PASSWORD_LENGTH &&
      formData.Passord === formData.GjentaPassord);

  return (
    <Box
      sx={{ width: 0.5 }}
      alignItems={"center"}
      justifyContent={"center"}
      style={{ margin: "auto" }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(1fr, 1fr)"
        gap={2}
        alignItems={"center"}
        style={{ margin: "auto" }}
      >
        <Box gridColumn="span 1">
          <Item>
            <ByttPassordTittel />
            <ByttPassordForm formData={formData} onChange={setFormData} />
            <ByttPassordButton
              onSave={handleSave}
              isFormValid={isFormValid}
              onFormReturn={handleFormReturn}
            />
            <ByttPassordSuccsessAlert vis={visByttPassordSuccsessAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
