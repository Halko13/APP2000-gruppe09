// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormOppdaterBrukerDataEffect } from "@/hooks/useFormOppdaterBrukerDataEffect";
import { usePassordEndring } from "@/hooks/usePassordEndring";

const textFieldData = [
  { id: "AnsattNr", label: "AnsattNr", required: true, variant: "filled" },
  { id: "Fornavn", label: "Fornavn", required: true, variant: "filled" },
  { id: "Etternavn", label: "Etternavn", required: true, variant: "filled" },
  { id: "Epost", label: "Epost", required: true, variant: "filled" },
  { id: "Stilling", label: "Stilling", required: true, variant: "filled" },
  { id: "Avdeling", label: "Avdeling", required: true, variant: "filled" },
  {
    id: "AntallJobbTimer",
    label: "Antall jobbtimer",
    type: "number",
    variant: "filled",
  },
];

export default function OppdaterBrukerForm({ formData, onChange }) {
  const handleEndring = useFormUpdate(onChange);
  const passordError = useFormValidation(formData);
  useFormOppdaterBrukerDataEffect(formData);
  const handlePassordEndring = usePassordEndring(onChange);
  console.log("formData", formData);
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
      <div>
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
      </div>
    </Box>
  );
}
