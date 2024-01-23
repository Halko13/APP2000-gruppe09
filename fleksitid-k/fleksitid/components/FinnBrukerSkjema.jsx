// FinnBrukerSkjema.js
"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle"; // Adjust the path as needed
import { Box } from "@mui/material";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
// Assuming other components are imported correctly
import FinnBrukerTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";
import SlettBrukerSkjema from "@/components/SlettBrukerSkjema";
import OppdaterBrukerSkjema from "@/components/OppdaterBrukerSkjema";

export default function FinnBrukerSkjema() {
  // Data i feltene
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
  });
  // Data fra database
  const [userData, setUserData] = React.useState(null);
  // Skal slettBrukerSkjema vises
  const [visSlettBrukerSkjema, setShowSlettBrukerSkjema] =
    React.useState(false);
  // Skal oppdaterBrukerSkjema vises
  const [visOppdaterBrukerSkjema, setShowOppdatgerBrukerSkjema] =
    React.useState(false);
  // Sjekker nå path
  const currentPath = usePathname();
  const oppdaterBrukerPath = "/admin/oppdaterBruker";
  const slettBrukerPath = "/admin/slettBruker";

  // Finner bruker fra database
  // firestore docs
  // https://firebase.google.com/docs/firestore/query-data/get-data
  const handleFinnBruker = async () => {
    //  Henter bruker fra server
    const docRef = doc(db, "Brukere", formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
      if (currentPath === slettBrukerPath) setShowSlettBrukerSkjema(true);
      else if (currentPath === oppdaterBrukerPath)
        setShowOppdatgerBrukerSkjema(true);
    } else {
      console.log("Finner ikke dokumentet");
    }
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: "",
    });
    setUserData(null);
    setShowSlettBrukerSkjema(false);
    setShowOppdatgerBrukerSkjema(false);
  };

  const isFormValid = formData.AnsattNr !== "";
  return (
    <Box sx={{ width: 0.5 }} alignItems={"center"} style={{ margin: "auto" }}>
      {visSlettBrukerSkjema ? (
        <SlettBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : visOppdaterBrukerSkjema ? (
        <OppdaterBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : (
        <>
          <Item>
            <FinnBrukerTextField formData={formData} onChange={setFormData} />
          </Item>
          <Item>
            <FinnBrukerButton
              onFind={handleFinnBruker}
              isFormValid={isFormValid}
              onFormReset={handleFormReset}
            />
          </Item>
        </>
      )}
    </Box>
  );
}
