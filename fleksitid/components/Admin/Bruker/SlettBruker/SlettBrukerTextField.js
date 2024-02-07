// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const textFieldStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "black",
};

const fieldDefinitions = [
  { id: "AnsattNr", label: "AnsattNr", variant: "filled" },
  { id: "Fornavn", label: "Fornavn", variant: "filled" },
  { id: "Etternavn", label: "Etternavn", variant: "filled" },
  { id: "Stilling", label: "Stilling", variant: "filled" },
  {
    id: "AntallJobbTimer",
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
        "& .MuiTextField-root": { m: 1, width: "95%" }, // Adjust the width here
        mx: 2,
      }}
      noValidate
      autoComplete="off"
    >
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
    </Box>
  );
}
