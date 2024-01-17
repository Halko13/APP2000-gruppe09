// SlettBrukerButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function FinnBrukerButton({ onFind, isFormValid, onFormReset }) {
  const handleFindBruker = () => {
    if (isFormValid) {
      onFind();
    } else {
      console.log("valider ikke " + isFormValid);
      alert('Please fill in the field');
    }
  };

  const handleResetClick = () => {
    onFormReset(); // Reset the form
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="contained" onClick={handleFindBruker}>
        Finn bruker
      </Button>
      <Button variant="outlined" onClick={handleResetClick}>
        Reset
      </Button>
    </Stack>
  );
}
