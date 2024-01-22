import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function NyBrukerButton({ onSave, isFormValid, onFormReset }) {
  const handleSaveClick = () => {
    if (isFormValid) {
      onSave();
      onFormReset(); // Reset the form after successful save
    } else {
      // Show an error message or handle the case where the form is not valid
      console.log("valider ikke " + isFormValid);
      alert("Fyll inn alle felter og passord må matche");
    }
  };

  const handleResetClick = () => {
    onFormReset(); // Reset the form
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="contained" onClick={handleSaveClick}>
        Send
      </Button>
      <Button variant="outlined" onClick={handleResetClick}>
        Reset
      </Button>
    </Stack>
  );
}
