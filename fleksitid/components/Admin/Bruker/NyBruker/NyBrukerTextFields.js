// Utvilet av Halvor
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormDataEffect } from "@/hooks/useFormDataEffect";
import { usePassordEndring } from "@/hooks/usePassordEndring";

export const PASSWORD_LENGTH = 6;

const textFieldData = [
  { id: "AnsattNr", label: "AnsattNr", required: true, variant: "filled" },
  { id: "Fornavn", label: "Fornavn", required: true, variant: "filled" },
  { id: "Etternavn", label: "Etternavn", required: true, variant: "filled" },
  { id: "Epost", label: "Epost", required: true, variant: "filled" },
  { id: "Stilling", label: "Stilling", required: true, variant: "filled" },
  { id: "Avdeling", label: "Avdeling", required: true, variant: "filled" },
  {
    id: "AntallJobbTimer",
    label: "Antall jobbtimer i uka",
    type: "number",
    variant: "filled",
  },

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

export default function NyBrukerForm({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  const passordError = useFormValidation(formData);
  useFormDataEffect(formData);
  const handlePassordEndring = usePassordEndring(onChange);

  // Oppdaterer når checkbox endres i form

  // Hentet tekstfelt fra MUI
  // https://mui.com/material-ui/react-text-field/
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
            handleChange(e);
            if (field.id === "Passord" || field.id === "GjentaPassord") {
              handlePassordEndring(e);
            }
          }}
          value={formData[field.id] || ""} // Default to '' if formData[field.id] is undefined
          error={
            (field.id === "Passord" || field.id === "GjentaPassord") &&
            passordError
          }
          helperText={
            (field.id === "Passord" || field.id === "GjentaPassord") &&
            passordError
              ? "Passord må ha lengde 6"
              : ""
          }
        />
      ))}
    </Box>
  );
}
