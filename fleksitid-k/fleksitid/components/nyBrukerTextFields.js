// nyBrukerTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";

export const PASSWORD_LENGTH = 6;

export default function FormTextFields({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  const passwordError = useFormValidation(formData);

  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    const isPasswordValid = /^[0-9]*$/.test(value);
    onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
  };

  const handleGjentaPasswordChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
  };

  React.useEffect(() => {
    document.getElementById('AnsattNr').value = formData.AnsattNr;
    document.getElementById('Fornavn').value = formData.Fornavn;
    document.getElementById('Etternavn').value = formData.Etternavn;
    document.getElementById('Stilling').value = formData.Stilling;
    document.getElementById('antallJobbtimer').value = formData.antallJobbtimer;
    document.getElementById('password').value = formData.password;
    document.getElementById('gjentaPassword').value = formData.gjentaPassword;
  }, [formData]);

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