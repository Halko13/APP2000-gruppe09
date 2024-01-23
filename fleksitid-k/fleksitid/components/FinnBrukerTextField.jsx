// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useResetFinnBrukerForm } from "@/hooks/useResetFinnBrukerForm";

export default function FinnBrukerTextField({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  useResetFinnBrukerForm(formData);

  const fields = [
    { id: "AnsattNr", label: "AnsattNr", required: true, variant: "filled" },
    // Add more fields as needed
  ];

  // Hentet tekstfelt fra MUI
  // https://mui.com/material-ui/react-text-field/
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 1 },
        mx: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {fields.map((field) => (
          <TextField
            key={field.id}
            required={field.required}
            id={field.id}
            label={field.label}
            variant={field.variant}
            onChange={handleChange}
            value={formData[field.id]}
          />
        ))}
      </div>
    </Box>
  );
}
