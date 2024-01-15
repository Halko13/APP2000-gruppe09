// nyBrukerTextFields.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormUpdate } from "@/hooks/useFormUpdate";

export const PASSWORD_LENGTH = 6;

export default function SlettBrukerTextField({ formData, onChange }) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 1 },
        mx: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled
          id="AnsattNr"
          label="AnsattNr"
          variant="filled"
          value={formData.AnsattNr}
        />
        <TextField
          disabled
          id="Fornavn"
          label="Fornavn"
          variant="filled"
          value={formData.Fornavn}
        />
        <TextField
          disabled
          id="Etternavn"
          label="Etternavn"
          variant="filled"
          value={formData.Etternavn}
        />
        <TextField
          disabled
          id="Stilling"
          label="Stilling"
          variant="filled"
          value={formData.Stilling}
        />
        <TextField
          disabled
          id="antallJobbtimer"
          label="Antall jobbtimer"
          type="number"
          variant="filled"
          value={formData.antallJobbtimer}
        />
      </div>
    </Box>
  );
}
