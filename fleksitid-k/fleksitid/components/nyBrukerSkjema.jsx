// nyBrukerSkjema.js
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Item } from "@/hooks/useFormStyle";
import FormPropsTextFields from "@/components/nyBrukerTextFields";
import IconLabelButtons from "@/components/nyBrukerButton";
import { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";

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

  const handleSave = async () => {
    // Here you can perform the logic to save the data to a database
    
    console.log('Saving data to the database:',  formData);
  // const brukerRef = db.collection('Brukere').doc(formData.AnsattNr);

    // try {
    //   const doc = await brukerRef.get();

    //   if (doc.exists) {
    //     alert("Ansatt nummer finnes allerede");
    //   } else {
    //     // Document does not exist, create a new one
    //     await brukerRef.set(formData);
    //     console.log('Dokument lagd:', formData);
    //   }
    // } catch (error) {
    //   console.error("Error fetching data from Firestore:", error);
    // }
    alert("Ny bruker lagt til");
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
            <IconLabelButtons onSave={handleSave} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
