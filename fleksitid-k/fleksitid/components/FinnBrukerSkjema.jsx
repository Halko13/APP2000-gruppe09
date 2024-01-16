// FinnBrukerSkjema.js
'use client';
import * as React from 'react';
import { Item } from '@/hooks/useFormStyle';  // Adjust the path as needed
import { Box } from '@mui/material';

// Assuming other components are imported correctly
import FinnTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";
import SlettBrukerSkjema from '@/components/SlettBrukerSkjema';

// Dummy data for testing
const dummyUserData = {
  AnsattNr: '12345',
  Fornavn: 'John',
  Etternavn: 'Doe',
  Stilling: 'Developer',
  AntallJobbtimer: '40'
};

export default function FinnBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: ''
  });
  const [userData, setUserData] = React.useState(null);
  const [showSlettBrukerSkjema, setShowSlettBrukerSkjema] = React.useState(false);

  const handleFinnBruker = async () => {
    setUserData(dummyUserData);
    setShowSlettBrukerSkjema(true);
    console.log('Finner data fra database:', formData.AnsattNr);
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
