// nyBrukerSkjema.js
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Item } from "@/hooks/useFormStyle";
import NyBrukerForm from "@/components/nyBrukerTextFields";
import NyBrukerButton from "@/components/NyBrukerButton";
import { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";
import { db } from '@/app/firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore"; 

export default function NyBrukerSkjema() {
  const [formData, setFormData] = React.useState({
    AnsattNr: '',
    Fornavn: '',
    Etternavn: '',
    Stilling: '',
    AntallJobbtimer: '',
    Password: '',
    GjentaPassword: '',
    ErAdmin: false,
  });

  const handleSave = async () => {
    console.log('Saving data to the database:',  formData);
    // Sjekke om finnes fra før
        
    const docRef = doc(db, "Brukere", formData.AnsattNr);
    const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    alert("Ansatt nummer finnes fra før");
  } else {
    // docSnap.data() will be undefined in this case
    await setDoc(doc(db, "Brukere", formData.AnsattNr), {
      AnsattNr: formData.AnsattNr,
      Fornavn: formData.Fornavn,
      Etternavn: formData.Etternavn,
      Stilling: formData.Stilling,
      AntallJobbTimer: formData.AntallJobbtimer,
      Password: formData.Password,
      Innlogget: false,
      ErAdmin: formData.ErAdmin,
    });
    alert("Ny bruker lagt til");
  } 
    // Reset the form data after saving
    handleFormReset();
  };

  const handleFormReset = () => {
    // Reset the form data
    setFormData({
      AnsattNr: '',
      Fornavn: '',
      Etternavn: '',
      Stilling: '',
      AntallJobbtimer: '',
      Password: '',
      GjentaPassword: '',
      ErAdmin: false,
    });
  };

  const isFormValid =
    formData.AnsattNr !== '' &&
    formData.Fornavn !== '' &&
    formData.Etternavn !== '' &&
    formData.Stilling !== '' &&
    formData.Password !== '' &&
    formData.GjentaPassword !== '' &&
    formData.Password === formData.GjentaPassword &&
    formData.Password.length === PASSWORD_LENGTH;

  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2} alignItems={'center'} style={{ margin: 'auto' }}>
        <Box gridColumn="span 1">
          <Item>
            <NyBrukerForm formData={formData} onChange={setFormData} />
            <NyBrukerButton onSave={handleSave} isFormValid={isFormValid} onFormReset={handleFormReset} />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
