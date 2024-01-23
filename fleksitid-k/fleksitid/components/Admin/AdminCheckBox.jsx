// Utviklet av Halvor Vilnes

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function AdminCheckBox({ checked, onChange, label }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  // FormControl, formgroup, formControlLabel fra MUI
  // https://mui.com/material-ui/react-checkbox/
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="ErAdmin"
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              sx={{ fontSize: "50px" }}
            />
          }
          // Fikk hjelp av ChatGPT til å endre label størrelse
          label={<span style={{ fontSize: "25px" }}>{label}</span>}
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}
