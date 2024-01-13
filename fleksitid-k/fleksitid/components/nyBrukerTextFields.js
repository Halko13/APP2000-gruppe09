// nyBrukerTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormTextFields({ formData, onChange }) {
  const [passwordError, setPasswordError] = React.useState(false);

  const isFormValid = React.useMemo(() => {
    const isValid =
      formData.AnsattNr &&
      formData.Fornavn &&
      formData.Etternavn &&
      formData.Stilling &&
      formData.password &&
      formData.gjentaPassword &&
      formData.password === formData.gjentaPassword;

    return isValid;
  }, [formData]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
    // Remove the password error when any other field changes
    setPasswordError(false);
  };

  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
    // Set or remove the password error based on whether the passwords match
    setPasswordError(value !== formData.gjentaPassword);
  };

  const handleGjentaPasswordChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
    // Set or remove the password error based on whether the passwords match
    setPasswordError(value !== formData.password);
  };

  React.useEffect(() => {
    // Reset the form fields when the formData changes
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
        />
        <TextField
          required
          id="Fornavn"
          label="Fornavn"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          required
          id="Etternavn"
          label="Etternavn"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          required
          id="Stilling"
          label="Stilling"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="antallJobbtimer"
          label="Antall jobbtimer"
          type="number"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={handlePasswordChange}
        />
        <TextField
          required
          id="gjentaPassword"
          label="Gjenta Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          error={passwordError}
          helperText={passwordError ? 'Passwords do not match' : ''}
          onChange={handleGjentaPasswordChange}
        />
      </div>
    </Box>
  );
}
