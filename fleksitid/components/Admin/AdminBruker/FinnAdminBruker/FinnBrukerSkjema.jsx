// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle";
import { Box } from "@mui/material";
//DB
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { dbCollectionBrukere } from "@/firebase/firebaseConfig";

//Next
import { usePathname } from "next/navigation";
//komponenter
import FinnBrukerTextField from "@/components/Admin/Bruker/FinnBruker/FinnBrukerTextField";
import FinnBrukerButton from "@/components/Admin/Bruker/FinnBruker/FinnBrukerButton";
import SlettBrukerSkjema from "@/components/Admin/Bruker/SlettBruker/SlettBrukerSkjema";
import OppdaterBrukerSkjema from "@/components/Admin/Bruker/OppdaterBruker/OppdaterBrukerSkjema";
import { FinnBrukerErrorAlert } from "@/components/Admin/Bruker/FinnBruker/Alerts";

export default function FinnBrukerSkjema() {
  // Data i feltene
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
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
    const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
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
      AnsattNr: "",
    });
    setBrukerData(null);
    setVisSlettBrukerSkjema(false);
    setVisOppdaterBrukerSkjema(false);
    setVisFinnBrukerErrorAlert(false);
  };

  const isFormValid = formData.AnsattNr !== "";

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
        <SlettBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : visOppdaterBrukerSkjema ? (
        <OppdaterBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : (
        <>
          <Item>
            <FinnBrukerTextField formData={formData} onChange={setFormData} />
            <FinnBrukerButton
              onFind={handleFinnBruker}
              isFormValid={isFormValid}
              onFormReset={handleFormReset}
            />
            <FinnBrukerErrorAlert vis={visFinnBrukerErrorAlert} />
          </Item>
        </>
      )}
    </Box>
  );
}
