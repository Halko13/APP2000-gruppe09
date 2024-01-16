// SlettBrukerButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function SlettBrukerButton({ onDelete, isFormValid, handleFormReturn }) {
  const handleDeleteUser = () => {
    if (isFormValid) {
      onDelete();
      // Reset the form after successful save
    } else {
      // Show an error message or handle the case where the form is not valid
      console.log("valider ikke " + isFormValid);
      alert('Please fill in the field');
    }
  };

  const handleReturnClick = () => {
    handleFormReturn();
    console.log("noe");
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Link href = "/admin/slettBruker">
      {/* <Button variant="outlined"> */}
      <Button variant="outlined" onClick={handleReturnClick}>

        Tilbake
      </Button>
      </Link>
      <Button variant="contained" onClick={handleDeleteUser}>
        Slett bruker
      </Button>
    </Stack>
  );
}
