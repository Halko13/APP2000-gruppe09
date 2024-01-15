// nyBrukerTextFields.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useResetFinnBrukerForm } from '@/hooks/useResetFinnBrukerForm';

export const PASSWORD_LENGTH = 6;

export default function FinnBrukerTextField({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  useResetFinnBrukerForm(formData);

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
