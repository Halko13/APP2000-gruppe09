// FinnBrukerSkjema.js
'use client';
import * as React from 'react';
import { Item } from '@/hooks/useFormStyle';  // Adjust the path as needed
import { Box } from '@mui/material';
import { db } from '@/app/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
// Assuming other components are imported correctly
import FinnTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";
import SlettBrukerSkjema from '@/components/SlettBrukerSkjema';


export default function FinnBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: ''
  });
  const [userData, setUserData] = React.useState(null);
  const [showSlettBrukerSkjema, setShowSlettBrukerSkjema] = React.useState(false);

  const handleFinnBruker = async () => {
  //  Henter bruker fra server
    
  const docRef = doc(db, "Brukere", formData.AnsattNr);
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setUserData(docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
} 



    // Dummy data
    setShowSlettBrukerSkjema(true);
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: ''
    });
    setUserData(null); // Reset userData to null
    setShowSlettBrukerSkjema(false);
  };

  const isFormValid = formData.AnsattNr !== '';

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      {showSlettBrukerSkjema ? (
        <SlettBrukerSkjema userData={userData} onGoBack={handleFormReset} />
      ) : (
        <>
        <Item>
          <FinnTextField formData={formData} onChange={setFormData} />
        </Item>
        <Item>
          <FinnBrukerButton onFind={handleFinnBruker} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </>
       )}
    </Box>
  );
}
