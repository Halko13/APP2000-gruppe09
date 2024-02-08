// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle";
import { Box } from "@mui/material";
//DB
import { db, dbCollectionAdminBrukere } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

//Next
import { usePathname } from "next/navigation";
//komponenter
import FinnAdminBrukerButton from "@/components/Admin/AdminBruker/FinnAdminBruker/FinnAdminBrukerButton";
import FinnAdminBrukerTextField from "@/components/Admin/AdminBruker/FinnAdminBruker/FinnAdminBrukerTextField";
import SlettAdminBrukerSkjema from "@/components/Admin/AdminBruker/SlettAdminBruker/SlettAdminBrukerSkjema";
// import OppdaterAdminBrukerSkjema from "@/components/Admin/AdminBruker/OppdaterAdminBruker/OppdaterAdminBrukerSkjema";
import { FinnBrukerErrorAlert } from "@/components/Admin/AdminBruker/FinnAdminBruker/Alerts";

export default function FinnAdminBrukerSkjema({ onGoBack }) {
  // Data i feltene
  const [formData, setFormData] = React.useState({
    Brukernavn: "",
  });
  // Data fra database
  const [userData, setBrukerData] = React.useState(null);
  // Skal slettBrukerSkjema vises"
  const [visSlettBrukerSkjema, setVisSlettBrukerSkjema] = React.useState(false);
  // Skal oppdaterBrukerSkjema vises
  const [visOppdaterBrukerSkjema, setVisOppdaterBrukerSkjema] =
    React.useState(false);

  // Finner ikke bruker error alert
  const [visFinnBrukerErrorAlert, setVisFinnBrukerErrorAlert] =
    React.useState(false);
  // Sjekker nå path
  const currentPath = usePathname();
  const oppdaterBrukerPath = "/admin/oppdaterBruker";
  const slettBrukerPath = "/admin/slettBruker";

  // Finner bruker fra database
  // firestore docs
  // https://firebase.google.com/docs/firestore/query-data/get-data
  const handleFinnBruker = async () => {
    //  Henter bruker fra DB
    const docRef = doc(db, dbCollectionAdminBrukere, formData.Brukernavn);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Setter brukerData til data fra database
      const brukerData = docSnap.data();
      // Setter GjentaPassord til å være det samme som Passord, siden det ikke lagres i databasem
      brukerData.GjentaPassord = brukerData.Passord;
      // Setter brukerData til å være all info om bruker
      setBrukerData(brukerData);
      // Sjekker om det er oppdaterbruker parh eller slett bruker path
      if (currentPath === slettBrukerPath) setVisSlettBrukerSkjema(true);
      else if (currentPath === oppdaterBrukerPath)
        setVisOppdaterBrukerSkjema(true);
    } else {
      setVisFinnBrukerErrorAlert(true);
      // Fjerner alert etter 3 sekunder
      setTimeout(() => {
        setVisFinnBrukerErrorAlert(false);
      }, 3000);
    }
  };

  const handleFormReset = () => {
    setFormData({
      Brukernavn: "",
    });
    setBrukerData(null);
    setVisSlettBrukerSkjema(false);
    setVisOppdaterBrukerSkjema(false);
    setVisFinnBrukerErrorAlert(false);
  };
  const handleReturn = () => {
    onGoBack();
  };
  const isFormValid = formData.Brukernavn !== "";

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
      {visSlettBrukerSkjema ? (
        <SlettAdminBrukerSkjema
          userData={userData}
          onGoBack={handleFormReset}
        />
      ) : visOppdaterBrukerSkjema ? (
        <OppdaterAdminBrukerSkjema
          userData={userData}
          onGoBack={handleFormReset}
        />
      ) : (
        <>
          <Item>
            <FinnAdminBrukerTextField
              formData={formData}
              onChange={setFormData}
            />
            <FinnAdminBrukerButton
              onFind={handleFinnBruker}
              isFormValid={isFormValid}
              onFormReset={handleFormReset}
              onGoBack={handleReturn}
            />
            <FinnBrukerErrorAlert vis={visFinnBrukerErrorAlert} />
          </Item>
        </>
      )}
    </Box>
  );
}
