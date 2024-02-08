// Utviklet av Halvor Vilnes

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function SlettAdminBrukerButton({
  onDelete,
  handleFormReturn,
  onGoBack,
}) {
  const handleDeleteUser = () => {
    onDelete();
  };

  const handleReturnClick = () => {
    handleFormReturn();
  };
  const handleReturn = () => {
    onGoBack();
  };
  // Hentet fra MUI DOCS
  //https://mui.com/material-ui/react-button/
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" onClick={handleReturnClick}>
          Tilbake
        </Button>
        <Button variant="contained" onClick={handleDeleteUser}>
          Slett bruker
        </Button>
      </Stack>
      <Stack sx={{ pt: 2 }}>
        <Button variant="outlined" onClick={handleReturn}>
          Tilbake
        </Button>
      </Stack>
    </Box>
  );
}
