// SlettBrukerSkjema.js
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SlettBrukerTextField from "@/components/SlettBrukerTextField";
import SlettBrukerButton from "@/components/SlettBrukerButton";

import  { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function SlettBrukerSkjema({ userData }) {
  const [formData, setFormData] = React.useState(userData);

  const handleSlettBruker = async () => {
    console.log('Sletter data fra database:', formData);
    // Implement deletion logic if needed
    // const res = await db.collection('brukere').doc(formData.AnsattNr).delete();
    // Reset the form data after saving
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: ''
    });
  };

  const handleFormReset = () => {
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: ''
    });
  };

  const isFormValid =
    formData.AnsattNr !== '' &&
    formData.Fornavn !== '' &&
    formData.Etternavn !== '' &&
    formData.Stilling !== '';

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2} alignItems={'center'} style={{ margin: 'auto' }}>
        <Box gridColumn="span 1">
          <Item>
            <SlettBrukerTextField formData={formData} onChange={setFormData} />
          </Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>
            <SlettBrukerButton onDelete={handleSlettBruker} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
