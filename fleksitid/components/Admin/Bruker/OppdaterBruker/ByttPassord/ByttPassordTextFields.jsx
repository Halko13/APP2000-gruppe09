// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { usePassordEndring } from "@/hooks/usePassordEndring";

const textFieldData = [
  {
    id: "Passord",
    label: "Passord",
    type: "password",
    autoComplete: "current-password",
    required: true,
    variant: "filled",
  },
  {
    id: "GjentaPassord",
    label: "Gjenta Passord",
    type: "password",
    autoComplete: "current-password",
    required: true,
    variant: "filled",
  },
];

export default function ByttPassordForm({ formData, onChange }) {
  const passordError = useFormValidation(formData);
  const handlePassordEndring = usePassordEndring(onChange);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "95%" }, // Adjust the width here
        mx: 2,
      }}
      noValidate
      autoComplete="off"
    >
      {textFieldData.map((field) => (
        <TextField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type || "text"}
          autoComplete={field.autoComplete || ""}
          required={field.required || false}
          variant={field.variant || "filled"}
          onChange={(e) => {
            handlePassordEndring(e);
          }}
          value={formData[field.id]}
          error={
            (field.id === "Passord" || field.id === "GjentaPassord") &&
            passordError
          }
          helperText={
            (field.id === "Passord" || field.id === "GjentaPassord") &&
            passordError
              ? "Passord må ha 6 nummer"
              : ""
          }
        />
      ))}
    </Box>
  );
}
