// nyBrukerTextFields.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormDataEffect } from "@/hooks/useFormDataEffect";
import { usePasswordChange } from "@/hooks/usePasswordChange";
import { useGjentaPasswordChange } from "@/hooks/useGjentaPasswordChange";

export const PASSWORD_LENGTH = 6;

export default function FormTextFields({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  const passwordError = useFormValidation(formData);
  useFormDataEffect(formData);
  const handlePasswordChange = usePasswordChange(onChange);
  const handleGjentaPasswordChange = useGjentaPasswordChange(onChange);

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
          required
          id="AnsattNr"
          label="AnsattNr"
          variant="filled"
          onChange={handleChange}
          value={formData.AnsattNr}
        />
        <TextField
          required
          id="Fornavn"
          label="Fornavn"
          variant="filled"
          onChange={handleChange}
          value={formData.Fornavn}
        />
        <TextField
          required
          id="Etternavn"
          label="Etternavn"
          variant="filled"
          onChange={handleChange}
          value={formData.Etternavn}
        />
        <TextField
          required
          id="Stilling"
          label="Stilling"
          variant="filled"
          onChange={handleChange}
          value={formData.Stilling}
        />
        <TextField
          id="antallJobbtimer"
          label="Antall jobbtimer"
          type="number"
          variant="filled"
          onChange={handleChange}
          value={formData.antallJobbtimer}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={handlePasswordChange}
          value={formData.password}
          error={passwordError}
          helperText={passwordError ? `Password must be ${PASSWORD_LENGTH} digits` : ''}
        />
        <TextField
          required
          id="gjentaPassword"
          label="Gjenta Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={handleGjentaPasswordChange}
          value={formData.gjentaPassword}
          error={passwordError}
          helperText={passwordError ? 'Passwords must match' : ''}
        />
      </div>
    </Box>
  );
}
