// Utvilet av Halvor
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormDataEffect } from "@/hooks/useFormDataEffect";
import { usePassordEndring } from "@/hooks/usePassordEndring";
import AdminCheckBox from "@/components/Admin/AdminCheckBox";

export const PASSWORD_LENGTH = 6;

const textFieldData = [
  { id: "AnsattNr", label: "AnsattNr", required: true, variant: "filled" },
  { id: "Fornavn", label: "Fornavn", required: true, variant: "filled" },
  { id: "Etternavn", label: "Etternavn", required: true, variant: "filled" },
  { id: "Stilling", label: "Stilling", required: true, variant: "filled" },
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
const checkboxData = [{ id: "ErAdmin", label: "Adminbruker" }];

export default function NyBrukerForm({ formData, onChange }) {
  const handleChange = useFormUpdate(onChange);
  const passordError = useFormValidation(formData);
  useFormDataEffect(formData);
  const handlePassordEndring = usePassordEndring(onChange);

  const [erAdminChecked, setErAdminChecked] = React.useState(
    formData.ErAdmin || false //Hvis undefined, blir satt som false
  );

  // Oppdaterer når checkbox endres i form
  React.useEffect(() => {
    setErAdminChecked(formData.ErAdmin || false);
  }, [formData.ErAdmin]);

  const handleErAdminChange = (checked) => {
    setErAdminChecked(checked);
    onChange({ ...formData, ErAdmin: checked });
  };

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
            value={formData[field.id]}
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

        {/* Checkbox */}
        <AdminCheckBox
          checked={erAdminChecked}
          onChange={handleErAdminChange}
          label={checkboxData[0].label}
        />
      </div>
    </Box>
  );
}
