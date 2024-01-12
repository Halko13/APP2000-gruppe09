import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons({ onSave, isFormValid, onFormReset }) {
  const handleClick = () => {
    if (isFormValid) {
      onSave();
      onFormReset(); // Reset the form after successful save
    } else {
      // Show an error message or handle the case where the form is not valid
      console.log("valider ikke " + isFormValid)
      alert('Please fill in all required fields and ensure passwords match.');
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="flex-end">
      <Button variant="contained" onClick={handleClick}>
        Send
      </Button>
    </Stack>
  );
}