// ControlledCheckbox.jsx
// Hentet fra MUI DOCS
// https://mui.com/material-ui/react-checkbox/
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ checked, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
