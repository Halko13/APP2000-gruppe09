// nyBrukerTextFields.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useResetSlettBrukerForm } from '@/hooks/useResetSlettBrukerForm';

export const PASSWORD_LENGTH = 6;

export default function SlettBrukerTextField({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  useResetSlettBrukerForm(formData);

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
      </div>
    </Box>
  );
}
