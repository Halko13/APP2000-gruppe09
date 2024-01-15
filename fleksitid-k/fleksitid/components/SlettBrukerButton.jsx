// SlettBrukerButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SlettBrukerButton({ onDelete, isFormValid, onFormReset }) {
  const handleDeleteUser = () => {
    if (isFormValid) {
      onDelete();
      onFormReset(); // Reset the form after successful save
    } else {
      // Show an error message or handle the case where the form is not valid
      console.log("valider ikke " + isFormValid);
      alert('Please fill in the field');
    }
  };

  const handleResetClick = () => {
    onFormReset(); // Reset the form
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="contained" onClick={handleDeleteUser}>
        Slett bruker
      </Button>
      <Button variant="outlined" onClick={handleResetClick}>
        Reset
      </Button>
    </Stack>
  );
}
