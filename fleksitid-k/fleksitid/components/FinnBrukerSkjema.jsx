// nyBrukerSkjema.js
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import FinnTextField from "@/components/FinnBrukerTextField";
import FinnBrukerButton from "@/components/FinnBrukerButton";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function FinnBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: ''
  });

  const handleFinnBruker = () => {
    // Her for å slette fra sdatabasen
    // if()

    // else;
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
            <FinnTextField formData={formData} onChange={setFormData} />
          </Item>
        {/* </Box>
        <Box gridColumn="span 1"> */}
          <Item>
            <FinnBrukerButton onFind={handleFinnBruker} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}