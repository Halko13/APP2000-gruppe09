// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useResetFinnAdminBrukerForm } from "@/hooks/useResetFinnAdminBrukerForm";

export default function FinnAdminBrukerTextField({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  useResetFinnAdminBrukerForm(formData);

  const fields = [
    {
      id: "Brukernavn",
      label: "Brukernavn",
      required: true,
      variant: "filled",
    },
  ];

  // Hentet tekstfelt fra MUI
  // https://mui.com/material-ui/react-text-field/
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "90%" }, // Adjust the width here
        mx: 2,
      }}
      noValidate
      autoComplete="off"
    >
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
    </Box>
  );
}
