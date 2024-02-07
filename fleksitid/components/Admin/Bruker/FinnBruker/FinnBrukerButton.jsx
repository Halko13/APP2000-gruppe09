//Utviklet av Halvor Vilnes
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonErrorAlert } from "@/components/Admin/Bruker/FinnBruker/Alerts";

export default function FinnBrukerButton({ onFind, isFormValid, onFormReset }) {
  const [visButtonErrorAlert, setVisButtonErrorAlert] = useState(false);

  const handleFindBruker = () => {
    if (isFormValid) {
      onFind();
      setVisButtonErrorAlert(false);
    } else {
      console.log("valider ikke " + isFormValid);
      setVisButtonErrorAlert(true);
      setTimeout(() => {
        setVisButtonErrorAlert(false);
      }, 3000);
    }
  };

  const handleResetClick = () => {
    setVisButtonErrorAlert(false);
    onFormReset();
  };

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="contained" onClick={handleFindBruker}>
          Finn bruker
        </Button>
        <Button variant="outlined" onClick={handleResetClick}>
          Reset
        </Button>
      </Stack>
      <ButtonErrorAlert vis={visButtonErrorAlert} />
    </div>
  );
}
