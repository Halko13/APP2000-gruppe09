'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="AnsattNr"
          label="AnsattNr"
          variant="filled"
        />
         <TextField
          required
          id="Fornavn"
          label="Fornavn"
          variant="filled"
        />
         <TextField
          required
          id="Etternavn"
          label="Etternavn"
          variant="filled"
        />
         <TextField
          required
          id="Stilling"
          label="Stilling"
          variant="filled"
        />
         <TextField
          id="antallJobbtimer"
          label="Antall jobbtimer"
          type="number"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-gjenta-password-input"
          label="Gjenta Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
    </Box>
  );
}