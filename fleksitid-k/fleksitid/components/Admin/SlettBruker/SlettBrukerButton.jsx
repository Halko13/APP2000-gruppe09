// Utviklet av Halvor Vilnes

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function SlettBrukerButton({ onDelete, handleFormReturn }) {
  const handleDeleteUser = () => {
    onDelete();
  };

  const handleReturnClick = () => {
    handleFormReturn();
    console.log("noe");
  };
  // Hentet fra MUI DOCS
  //https://mui.com/material-ui/react-button/
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="outlined" onClick={handleReturnClick}>
        Tilbake
      </Button>
      <Button variant="contained" onClick={handleDeleteUser}>
        Slett bruker
      </Button>
    </Stack>
  );
}
