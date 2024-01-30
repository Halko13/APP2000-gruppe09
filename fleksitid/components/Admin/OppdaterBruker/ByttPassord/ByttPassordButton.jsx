// Utviklet av Halvor Vilnes

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonErrorAlert } from "@/components/Admin/OppdaterBruker/ByttPassord/Alerts";

export default function ByttPassordButton({
  onSave,
  isFormValid,
  onFormReturn,
}) {
  const [visButtonErrorAlert, setVisButtonErrorAlert] = React.useState(false);
  // console.log("isFormValid:", isFormValid);

  const handleSaveClick = () => {
    if (isFormValid) {
      onSave();
      setVisButtonErrorAlert(false);
    } else {
      // console.log("valider ikke " + isFormValid);
      setVisButtonErrorAlert(true);

      setTimeout(() => {
        setVisButtonErrorAlert(false);
      }, 3000);
    }
  };

  const handleReturnClick = () => {
    onFormReturn();
    setVisButtonErrorAlert(false);
  };

  // Hentet fra MUI DOCS
  //https://mui.com/material-ui/react-button/
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" onClick={handleReturnClick}>
          Tilbake
        </Button>
        <Button variant="contained" onClick={handleSaveClick}>
          Bytt Passord
        </Button>
      </Stack>
      <ButtonErrorAlert vis={visButtonErrorAlert} />
    </div>
  );
}
