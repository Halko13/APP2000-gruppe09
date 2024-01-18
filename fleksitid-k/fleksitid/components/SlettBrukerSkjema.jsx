// SlettBrukerSkjema.js
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import SlettBrukerTextField from "@/components/SlettBrukerTextField";
import SlettBrukerButton from "@/components/SlettBrukerButton";
import { Item } from '@/hooks/useFormStyle';

export default function SlettBrukerSkjema({ userData, onGoBack }) {
  const [formData, setFormData] = React.useState(userData);

  const handleSlettBruker = async () => {
    console.log('Sletter data fra database:', formData);
    // Sletter data fra database
    // const brukerRef = db.collection('Brukere').doc(formData.AnsattNr);
    // const res = await brukerRef.delete();
    alert("Slettet velykket");
    // Reset the form data after saving
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: ''
    });
    onGoBack(); // Go back to FinnBrukerSkjema
  };

  const handleFormReturn = () => {
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: ''
    });
    onGoBack(); // Go back to FinnBrukerSkjema
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
          <Item>
            <SlettBrukerButton onDelete={handleSlettBruker} isFormValid={isFormValid} handleFormReturn={handleFormReturn} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
