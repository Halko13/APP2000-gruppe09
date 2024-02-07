//Utviklet av Halvor Vilnes
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonErrorAlert } from "@/components/Admin/Bruker/FinnBruker/Alerts";

export default function FinnBrukerButton({ onAnsatt, onAdmin }) {
  const [visButtonErrorAlert, setVisButtonErrorAlert] = useState(false);

  const handleAnsattValg = () => {
    onAnsatt();
  };
  const handleAdminValg = () => {
    onAdmin();
  };

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="contained" onClick={handleAnsattValg}>
          Ansatt
        </Button>
        <Button variant="outlined" onClick={handleAdminValg}>
          Adminbruker
        </Button>
      </Stack>
      <ButtonErrorAlert vis={visButtonErrorAlert} />
    </div>
  );
}
