// SlettBrukerButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function SlettBrukerButton({ onDelete, handleFormReturn }) {
  const handleDeleteUser = () => {
      onDelete();
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
