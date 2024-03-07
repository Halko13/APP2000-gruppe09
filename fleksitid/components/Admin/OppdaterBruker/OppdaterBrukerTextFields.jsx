// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import { useFormOppdaterBrukerDataEffect } from "@/hooks/useFormOppdaterBrukerDataEffect";
import { usePassordEndring } from "@/hooks/usePassordEndring";
import AdminCheckBox from "@/components/Admin/AdminCheckBox";

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
];
const checkboxData = [{ id: "ErAdmin", label: "Adminbruker" }];

export default function OppdaterBrukerForm({ formData, onChange }) {
  const handleEndring = useFormUpdate(onChange);
  const passordError = useFormValidation(formData);
  useFormOppdaterBrukerDataEffect(formData);
  const handlePassordEndring = usePassordEndring(onChange);

  const [erAdminChecked, setErAdminChecked] = React.useState(false);

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
              handleEndring(e);
              if (field.id === "Passord" || field.id === "GjentaPassord")
                handlePassordEndring(e);
            }}
            value={formData[field.id]}
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
