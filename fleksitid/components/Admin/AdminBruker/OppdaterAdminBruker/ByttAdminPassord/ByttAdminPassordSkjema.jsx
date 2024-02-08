// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import {
  ByttPassordSuccsessAlert,
  ByttPassordErrorAlert,
  HashingErrorAlert,
} from "@/components/Admin/Bruker/OppdaterBruker/ByttPassord/Alerts";
import ByttAdminPassordForm from "@/components/Admin/AdminBruker/OppdaterAdminBruker/ByttAdminPassord/ByttAdminPassordTextFields";
import ByttAdminPassordButton from "@/components/Admin/AdminBruker/OppdaterAdminBruker/ByttAdminPassord/ByttAdminPassordButton";
import ByttAdminPassordTittel from "@/components/Admin/AdminBruker/OppdaterAdminBruker/ByttAdminPassord/ByttAdminPassordTittel";
import bcryptHashing from "@/components/Hash/Hashing";
// DB
import { db, dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { ADMIN_PASSORD_LENGTH } from "../../NyAdminBruker/NyAdminBrukerSkjema";

export default function ByttPassordSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState({
    ...userData,
    Passord: "",
    GjentaPassord: "",
  });

  const [visByttPassordSuccsessAlert, setVisByttPassordSuccsessAlert] =
    React.useState(false);
  const [visHashingErrorAlert, setVisHashingErrorAlert] = React.useState(false);
  // if()

  const handleSave = async () => {
    console.log("Endrer passord i database");

    try {
      const hashedPassword = await bcryptHashing(formData.Passord);
      await setDoc(
        doc(db, dbCollectionAdminBrukere, formData.Brukernavn),
        { Passord: hashedPassword, SistEndret: serverTimestamp() },
        { merge: true }
      );
      setVisByttPassordSuccsessAlert(true);
      setTimeout(() => {
        onGoBack();
      }, 3000);
    } catch (error) {
      setVisHashingErrorAlert(true);
      setVisByttPassordSuccsessAlert(false);
      setTimeout(() => {
        onGoBack();
      }, 3000);
    }
  };

  const handleFormReturn = () => {
    console.log("Returnerer til oppdater bruker skjema");
    onGoBack();
  };
  const isFormValid =
    (formData.Passord === userData.Passord &&
      formData.GjentaPassord === userData.GjentaPassord) || // Passord ikke endret, vil ikke være 6 tegn etter hashing
    (formData.Passord.length === ADMIN_PASSORD_LENGTH &&
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
            <ByttAdminPassordTittel />
            <ByttAdminPassordForm formData={formData} onChange={setFormData} />
            <ByttAdminPassordButton
              onSave={handleSave}
              isFormValid={isFormValid}
              onFormReturn={handleFormReturn}
            />
            <ByttPassordSuccsessAlert vis={visByttPassordSuccsessAlert} />
            <HashingErrorAlert vis={visHashingErrorAlert} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
