// nyBrukerTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Define the constant variable for password length
const PASSWORD_LENGTH = 6; // You can adjust this value

export default function FormTextFields({ formData, onChange }) {
  const [passwordError, setPasswordError] = React.useState(false);

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const isFormValid = React.useMemo(() => {
    const isValid =
      formData.AnsattNr &&
      formData.Fornavn &&
      formData.Etternavn &&
      formData.Stilling &&
      isNumeric(formData.password) &&
      isNumeric(formData.gjentaPassword) &&
      formData.password === formData.gjentaPassword &&
      formData.password.length === PASSWORD_LENGTH;

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

  // Use regex to check if the password only contains numbers
  const isPasswordValid = /^[0-9]*$/.test(value);

  // Log the validation result for debugging
  console.log('isPasswordValid:', isPasswordValid);

  // Set or remove the password error based on the validation condition
  setPasswordError(!isPasswordValid || value.length !== PASSWORD_LENGTH);

  // Update the state regardless of password validation status
  onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
};

const handleGjentaPasswordChange = (event) => {
  const { id, value } = event.target;

  // Use regex to check if the password only contains numbers
  const isPasswordValid = /^[0-9]*$/.test(value);

  // Log the validation result for debugging
  console.log('isPasswordValid:', isPasswordValid);

  // Set or remove the password error based on the validation condition
  setPasswordError(!isPasswordValid || value !== formData.password);

  // Update the state regardless of password validation status
  onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
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
        />
        <TextField
          required
          id="gjentaPassword"
          label="Gjenta Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          error={passwordError}
          helperText={passwordError ? `Password must be ${PASSWORD_LENGTH} digits` : ''}
          onChange={handleGjentaPasswordChange}
          value={formData.gjentaPassword}
        />
      </div>
    </Box>
  );
}
