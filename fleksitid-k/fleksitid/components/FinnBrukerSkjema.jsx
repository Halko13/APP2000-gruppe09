// FinnBrukerSkjema.js
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Assuming these components are imported correctly
import FinnTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";
import SlettBrukerSkjema from '@/components/SlettBrukerSkjema';

// Dummy data for testing
const dummyUserData = {
  AnsattNr: '12345',
  Fornavn: 'John',
  Etternavn: 'Doe',
  Stilling: 'Developer',
  antallJobbtimer: '40'
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function FinnBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: ''
  });

  const [userData, setUserData] = React.useState(null);

  const handleFinnBruker = async () => {
    // Comment out the database-related logic for testing
    // const brukerRef = db.collection('brukere').doc(formData.AnsattNr);
    // const doc = await brukerRef.get();

    // For testing, set some dummy data
    // Comment out the following line for testing with dummy data
    // setUserData(doc.exists ? doc.data() : null);
    setUserData(dummyUserData);

    console.log('Finner data fra database:', formData.AnsattNr);
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: ''
    });
    // setUserData(null);
  };
  const isFormValid = formData.AnsattNr !== '';

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      {userData ? (
        <SlettBrukerSkjema userData={userData} />
      ) : (
        <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2} alignItems={'center'} style={{ margin: 'auto' }}>
          <Box gridColumn="span 1">
            <Item>
              <FinnTextField formData={formData} onChange={setFormData} />
            </Item>
            <Item>
              <FinnBrukerButton onFind={handleFinnBruker} isFormValid={isFormValid} onFormReset={handleFormReset} />
            </Item>
          </Box>
        </Box>
      )}
    </Box>
  );
}
