// nyBrukerSkjema.js
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormPropsTextFields from "@/components/nyBrukerTextFields";
import IconLabelButtons from "@/components/nyBrukerButton";
import { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white', // Set background color to white
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NyBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: '',
    Fornavn: '',
    Etternavn: '',
    Stilling: '',
    antallJobbtimer: '',
    password: '',
    gjentaPassword: '',
  });

  const handleSave = () => {
    // Here you can perform the logic to save the data to a database
    console.log('Saving data to the database:', formData);

    // Reset the form data after saving
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: '',
      password: '',
      gjentaPassword: '',
    });
  };

  const handleFormReset = () => {
    // Reset the form data
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      antallJobbtimer: '',
      password: '',
      gjentaPassword: '',
    });
  };

  const isFormValid =
    formData.AnsattNr !== '' &&
    formData.Fornavn !== '' &&
    formData.Etternavn !== '' &&
    formData.Stilling !== '' &&
    formData.password !== '' &&
    formData.gjentaPassword !== '' &&
    formData.password === formData.gjentaPassword &&
    formData.password.length === PASSWORD_LENGTH;

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2} alignItems={'center'} style={{ margin: 'auto' }}>
        <Box gridColumn="span 1">
          <Item>
            <FormPropsTextFields formData={formData} onChange={setFormData} />
          </Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>
            <IconLabelButtons onSave={handleSave} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}