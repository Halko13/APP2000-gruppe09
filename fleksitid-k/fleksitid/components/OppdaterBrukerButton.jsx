// OppdaterBrukerButton.js
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OppdaterBrukerButton({
  onSave,
  isFormValid,
  onFormReturn,
}) {
  console.log("isFormValid:", isFormValid);

  const handleSaveClick = () => {
    if (isFormValid) {
      onSave();
      onFormReturn(); // Reset the form after successful save
    } else {
      console.log("valider ikke " + isFormValid);
      alert("Fyll inn alle felter og passord må matche");
    }
  };

  const handleReturnClick = () => {
    onFormReturn(); // Reset the form
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="contained" onClick={handleSaveClick}>
        Oppdater
      </Button>
      <Button variant="outlined" onClick={handleReturnClick}>
        Tilbake
      </Button>
    </Stack>
  );
}
