// FinnBrukerSkjema.js
"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle"; // Adjust the path as needed
import { Box } from "@mui/material";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
// Assuming other components are imported correctly
import FinnTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";
import SlettBrukerSkjema from "@/components/SlettBrukerSkjema";
import OppdaterBrukerSkjema from "@/components/OppdaterBrukerSkjema";

export default function FinnBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: "",
  });
  const [userData, setUserData] = React.useState(null);
  const [showSlettBrukerSkjema, setShowSlettBrukerSkjema] =
    React.useState(false);
  const [showOppdaterBrukerSkjema, setShowOppdatgerBrukerSkjema] =
    React.useState(false);

  const currentPath = usePathname();
  const oppdaterBrukerPath = "/admin/oppdaterBruker";
  const slettBrukerPath = "/admin/slettBruker";

  const handleFinnBruker = async () => {
    //  Henter bruker fra server
    console.log(currentPath);
    const docRef = doc(db, "Brukere", formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
      if (currentPath === slettBrukerPath) setShowSlettBrukerSkjema(true);
      else if (currentPath === oppdaterBrukerPath)
        setShowOppdatgerBrukerSkjema(true);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: "",
    });
    setUserData(null); // Reset userData to null
    setShowSlettBrukerSkjema(false);
    setShowOppdatgerBrukerSkjema(false);
  };

  const isFormValid = formData.AnsattNr !== "";
  return (
    <Box sx={{ width: 0.5 }} alignItems={"center"} style={{ margin: "auto" }}>
      {showSlettBrukerSkjema ? (
        <SlettBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : showOppdaterBrukerSkjema ? (
        <OppdaterBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : (
        <>
          <Item>
            <FinnTextField formData={formData} onChange={setFormData} />
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
