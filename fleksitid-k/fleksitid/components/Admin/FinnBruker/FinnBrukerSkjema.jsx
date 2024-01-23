// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle"; // Adjust the path as needed
import { Box } from "@mui/material";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
// Assuming other components are imported correctly
import FinnBrukerTextField from "@/components/Admin/FinnBruker/FinnBrukerTextField";
import FinnBrukerButton from "@/components/Admin/FinnBruker/FinnBrukerButton";
import SlettBrukerSkjema from "@/components/Admin/SlettBruker/SlettBrukerSkjema";
import OppdaterBrukerSkjema from "@/components/Admin/OppdaterBruker/OppdaterBrukerSkjema";

export default function FinnBrukerSkjema() {
  // Data i feltene
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
  });
  // Data fra database
  const [userData, setBrukerData] = React.useState(null);
  // Skal slettBrukerSkjema vises
  const [visSlettBrukerSkjema, setVisSlettBrukerSkjema] = React.useState(false);
  // Skal oppdaterBrukerSkjema vises
  const [visOppdaterBrukerSkjema, setVisOppdaterBrukerSkjema] =
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
      // Setter userData til data fra database
      setBrukerData(docSnap.data());
      if (currentPath === slettBrukerPath) setVisSlettBrukerSkjema(true);
      else if (currentPath === oppdaterBrukerPath)
        setVisOppdaterBrukerSkjema(true);
    } else {
      console.log("Finner ikke dokumentet");
    }
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: "",
    });
    setBrukerData(null);
    setVisSlettBrukerSkjema(false);
    setVisOppdaterBrukerSkjema(false);
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
