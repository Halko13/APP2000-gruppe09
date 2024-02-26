// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAdminFormValidation } from "@/hooks/useAdminFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormOppdaterAdminBrukerDataEffect } from "@/hooks/useFormOppdaterAdminBrukerDataEffect";
import { useAdminPassordEndring } from "@/hooks/useAdminPassordEndring";

const textFieldData = [
  { id: "Brukernavn", label: "Brukernavn", required: true, variant: "filled" },
  { id: "Epost", label: "Epost", required: true, variant: "filled" },
];

export default function OppdaterAdminBrukerForm({ formData, onChange }) {
  const handleEndring = useFormUpdate(onChange);
  const passordError = useAdminFormValidation(formData);
  useFormOppdaterAdminBrukerDataEffect(formData);
  const handlePassordEndring = useAdminPassordEndring(onChange);

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
            handleEndring(e);
            if (field.id === "Passord" || field.id === "GjentaPassord")
              handlePassordEndring(e);
          }}
          value={formData[field.id]}
        />
      ))}
    </Box>
  );
}
