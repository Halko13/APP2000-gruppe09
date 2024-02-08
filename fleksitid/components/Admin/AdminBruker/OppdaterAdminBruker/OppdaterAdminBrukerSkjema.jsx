// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import { Item } from "@/hooks/useFormStyle";
import OppdaterAdminBrukerForm from "@/components/Admin/AdminBruker/OppdaterAdminBruker/OppdaterAdminBrukerTextFields";
import OppdaterAdminBrukerButton from "@/components/Admin/AdminBruker/OppdaterAdminBruker/OppdaterAdminBrukerButton";
import {
  OppdatertBrukerSuccsessAlert,
  OppdatertBrukerErrorAlert,
  OppdatertBrukerInfoAlert,
} from "@/components/Admin/AdminBruker/OppdaterAdminBruker/Alerts";

import { db, dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
// TODO endre til admin brukere
import ByttAdminPassordSkjema from "@/components/Admin/AdminBruker/OppdaterAdminBruker/ByttAdminPassord/ByttAdminPassordSkjema";
export default function OppdaterAdminBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);

  // Oppdaterer formData til nye ansattNr
  React.useEffect(() => {
    setFormData(userData);
  }, [userData]);
  // Real time lytter, som ser om endring i passord feltet
  React.useEffect(() => {
    const docRef = doc(db, dbCollectionAdminBrukere, userData.Brukernavn);

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const oppdatertPassord = doc.data().Passord;
        setFormData((prevData) => ({
          ...prevData,
          Passord: oppdatertPassord,
        }));
      }
    });

    return () => unsubscribe(); // Unsubscribe when the component unmounts or when no longer needed
  }, [userData.Brukernavn]);
  // TODO endre til admin brukere
  const [visOppdatertBrukerSuccsessAlert, setVisOppdatertBrukerSuccsessAlert] =
    React.useState(false);
  const [visOppdatertBrukerErrorAlert, setVisOppdatertBrukerErrorAlert] =
    React.useState(false);
  const [visOppdatertBrukerInfoAlert, setVisOppdatertBrukerInfoAlert] =
    React.useState(false);
  const [visByttAdminPassordSkjema, setVisByttAdminPassordSkjema] =
    React.useState(false);

  const handleSave = async () => {
    // Sjekker hvis det er noen endring
    // Fikk kuttet ned flere && if setning ved hjelp av chatGPT
    // Sjekket hver verdi mot hverandre
    const erDataEndret = Object.keys(userData).some(
      (key) => userData[key] !== formData[key]
    );
    // Hente data fra firestore database
    // https://firebase.google.com/docs/firestore/manage-data/add-data
    if (erDataEndret) {
      // Sjekket hvis ansattNr har endret seg
      if (formData.Brukernavn !== userData.Brukernavn) {
        // Sjekker hvis ansattNr finnes fra før
        const nyDocRef = doc(db, dbCollectionAdminBrukere, formData.Brukernavn);
        const nyDocSnap = await getDoc(nyDocRef);
        if (!nyDocSnap.exists()) {
          const nyData = {
            ...formData,
            SistEndret: serverTimestamp(),
          };
          // Lagrer ikke gjenta passord i database
          delete nyData.GjentaPassord;
          await setDoc(nyDocRef, nyData);

          // Sletter gammelt dokument for å ikke ha flere dokumenter for samme ansatt
          // https://firebase.google.com/docs/firestore/manage-data/delete-data

          const gammelDocRef = doc(
            db,
            dbCollectionAdminBrukere,
            userData.Brukernavn
          );
          const gammelDocSnap = await getDoc(gammelDocRef);
          if (gammelDocSnap.exists()) {
            await deleteDoc(gammelDocRef);
            console.log(
              "Slettet gammelt dokument med ansattNr: ",
              userData.Brukernavn
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
        // Brukernavn har ikke endret seg, men andre data har
        const docRef = doc(db, dbCollectionAdminBrukere, userData.Brukernavn);

        const oppdatertData = {
          ...formData,
          SistEndret: serverTimestamp(),
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
  const handleReturn = () => {
    onGoBack();
  };
  const handleByttPassordComponent = () => {
    setVisByttAdminPassordSkjema(true);
    setVisOppdatertBrukerInfoAlert(false);
    setVisOppdatertBrukerErrorAlert(false);
    setVisOppdatertBrukerSuccsessAlert(false);
  };
  const handleByttPassordReturn = () => {
    setVisByttAdminPassordSkjema(false);
  };
  const isFormValid = formData.Brukernavn !== "" && formData.Epost !== "";

  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {visByttAdminPassordSkjema ? (
        <ByttAdminPassordSkjema
          userData={userData}
          onGoBack={handleByttPassordReturn}
        />
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(1fr, 1fr)"
          gap={2}
          alignItems={"center"}
          style={{ margin: "auto" }}
        >
          <Box gridColumn="span 1">
            <Item>
              <OppdaterAdminBrukerForm
                formData={formData}
                onChange={setFormData}
              />
              <OppdaterAdminBrukerButton
                onSave={handleSave}
                isFormValid={isFormValid}
                onFormReturn={handleReturn}
                onByttPassord={handleByttPassordComponent}
              />
              <OppdatertBrukerSuccsessAlert
                vis={visOppdatertBrukerSuccsessAlert}
              />
              <OppdatertBrukerErrorAlert vis={visOppdatertBrukerErrorAlert} />
              <OppdatertBrukerInfoAlert vis={visOppdatertBrukerInfoAlert} />
            </Item>
          </Box>
        </Box>
      )}
    </Box>
  );
}
