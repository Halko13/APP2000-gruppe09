// nyBrukerTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const PASSWORD_LENGTH = 6;
export default function FormTextFields({ formData, onChange }) {
  const [passwordError, setPasswordError] = React.useState(false);

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  React.useEffect(() => {
    const isValid =
      formData.AnsattNr &&
      formData.Fornavn &&
      formData.Etternavn &&
      formData.Stilling &&
      isNumeric(formData.password) &&
      isNumeric(formData.gjentaPassword) &&
      formData.password === formData.gjentaPassword &&
      formData.password.length === PASSWORD_LENGTH;

    setPasswordError(!isValid);
  }, [formData]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
    setPasswordError(false);
  };

  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    //Sjekkker om det er tall mellom 0 og 9
    const isPasswordValid = /^[0-9]*$/.test(value);
    //Setter password er ugyldig hvis det ikke er tall og ikke riktig lengde
    setPasswordError(!isPasswordValid || value.length !== PASSWORD_LENGTH);
    onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
  };

  const handleGjentaPasswordChange = (event) => {
    const { id, value } = event.target;
    const isPasswordValid = /^[0-9]*$/.test(value);
    setPasswordError(!isPasswordValid || value !== formData.password);
    onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
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
        mx: 2, // Set equal margin on both sides
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
