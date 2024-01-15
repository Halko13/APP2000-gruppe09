// nyBrukerSkjema.js
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SlettBrukerTextField from "@/components/SlettBrukerTextField";
import SlettBrukerButton from "@/components/SlettBrukerButton";

import  { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SlettBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: ''
  });

  const handleSlettBruker = async () => {
    // Her for å slette fra databasen
    // const res = await db.collection('brukere').doc(formData.AnsattNr).delete();
    console.log('Deleting data from the database:', formData.AnsattNr);
  
    // Reset the form data after deleting
    handleFormReset();
  };

  const handleFormReset = () => {
    // Reset the form data
    setFormData({
      AnsattNr: ''
    });
  };

  const isFormValid =
    formData.AnsattNr !== '';

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2} alignItems={'center'} style={{ margin: 'auto' }}>
        <Box gridColumn="span 1">
          <Item>
            <SlettBrukerTextField formData={formData} onChange={setFormData} />
          </Item>
        {/* </Box>
        <Box gridColumn="span 1"> */}
          <Item>
            <SlettBrukerButton onDelete={handleSlettBruker} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}