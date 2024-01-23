// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormUpdate } from "@/hooks/useFormUpdate";

export const PASSWORD_LENGTH = 6;

// Define the common style properties
const textFieldStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "black", // Set text color to black
};

const fieldDefinitions = [
  { id: "AnsattNr", label: "AnsattNr", variant: "filled" },
  { id: "Fornavn", label: "Fornavn", variant: "filled" },
  { id: "Etternavn", label: "Etternavn", variant: "filled" },
  { id: "Stilling", label: "Stilling", variant: "filled" },
  {
    id: "AntallJobbtimer",
    label: "Antall jobbtimer",
    type: "number",
    variant: "filled",
  },
  { id: "ErAdmin", label: "Adminbruker", type: "boolean", variant: "filled" },
];

export default function SlettBrukerTextField({ formData }) {
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
        {fieldDefinitions.map((field) => (
          <TextField
            key={field.id}
            disabled
            id={field.id}
            label={field.label}
            variant={field.variant}
            type={field.type}
            value={formData[field.id]}
            InputProps={{
              style: textFieldStyle,
            }}
          />
        ))}
      </div>
    </Box>
  );
}
