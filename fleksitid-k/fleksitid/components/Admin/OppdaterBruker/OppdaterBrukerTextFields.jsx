// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormDataEffect } from "@/hooks/useFormDataEffect";
import { usePasswordChange } from "@/hooks/usePasswordChange";
import AdminCheckBox from "@/components/Admin/AdminCheckBox";

// Define the array of TextField properties
const textFieldData = [
  { id: "AnsattNr", label: "AnsattNr", required: true, variant: "filled" },
  { id: "Fornavn", label: "Fornavn", required: true, variant: "filled" },
  { id: "Etternavn", label: "Etternavn", required: true, variant: "filled" },
  { id: "Stilling", label: "Stilling", required: true, variant: "filled" },
  {
    id: "AntallJobbTimer",
    label: "Antall jobbtimer",
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
const checkboxData = [{ id: "ErAdmin", label: "Adminbruker" }];

export default function OppdaterBrukerForm({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  const passwordError = useFormValidation(formData);
  useFormDataEffect(formData);
  const handlePasswordChange = usePasswordChange(onChange);

  // State for the checkbox
  // const [erAdminChecked, setErAdminChecked] = React.useState(formData.ErAdmin || false);  // Update the state when the form data changes
  const [erAdminChecked, setErAdminChecked] = React.useState(false); // Update the state when the form data changes

  React.useEffect(() => {
    setErAdminChecked(formData.ErAdmin || false);
  }, [formData.ErAdmin]);

  const handleErAdminChange = (checked) => {
    setErAdminChecked(checked);
    onChange({ ...formData, ErAdmin: checked });
  };

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
              if (field.id === "Passord") {
                handlePasswordChange(e);
              } else if (field.id === "GjentaPassord") {
                handlePasswordChange(e);
              }
            }}
            value={formData[field.id]}
            error={
              (field.id === "Passord" || field.id === "GjentaPassord") &&
              passwordError
            }
            helperText={
              (field.id === "Passord" || field.id === "GjentaPassord") &&
              passwordError
                ? "Password must be 6 digits"
                : ""
            }
          />
        ))}

        <AdminCheckBox
          checked={erAdminChecked}
          onChange={handleErAdminChange}
          label={checkboxData[0].label} // Use the label from checkboxData
        />
      </div>
    </Box>
  );
}
