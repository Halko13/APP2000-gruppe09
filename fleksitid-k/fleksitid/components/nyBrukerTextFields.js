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

// Define the array of TextField properties
const textFieldData = [
  { id: 'AnsattNr', label: 'AnsattNr', required: true, variant: 'filled' },
  { id: 'Fornavn', label: 'Fornavn', required: true, variant: 'filled' },
  { id: 'Etternavn', label: 'Etternavn', required: true, variant: 'filled' },
  { id: 'Stilling', label: 'Stilling', required: true, variant: 'filled' },
  { id: 'AntallJobbtimer', label: 'Antall jobbtimer', type: 'number', variant: 'filled' },
  { id: 'Password', label: 'Password', type: 'password', autoComplete: 'current-password', required: true, variant: 'filled' },
  { id: 'GjentaPassword', label: 'Gjenta Password', type: 'password', autoComplete: 'current-password', required: true, variant: 'filled' },
];

export default function NyBrukerForm({ formData, onChange }) {
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
        {textFieldData.map((field) => (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type || 'text'}
            autoComplete={field.autoComplete || ''}
            required={field.required || false}
            variant={field.variant || 'filled'}
            onChange={(e) => {
              handleChange(e);
              if (field.id === 'password') {
                handlePasswordChange(e);
              } else if (field.id === 'gjentaPassword') {
                handleGjentaPasswordChange(e);
              }
            }}
            value={formData[field.id]}
            error={(field.id === 'password' || field.id === 'gjentaPassword') && passwordError}
            helperText={(field.id === 'password' || field.id === 'gjentaPassword') && passwordError ? 'Password must be 6 digits' : ''}
          />
        ))}
      </div>
    </Box>
  );
}
