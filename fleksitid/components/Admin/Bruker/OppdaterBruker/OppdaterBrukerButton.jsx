// Utviklet av Halvor Vilnes

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonErrorAlert } from "@/components/Admin/Bruker/OppdaterBruker/Alerts";

export default function OppdaterBrukerButton({
  onSave,
  isFormValid,
  onFormReturn,
  onByttPassord,
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
  const handleByttPassord = () => {
    onByttPassord();
    setVisButtonErrorAlert(false);
  };

  // Hentet fra MUI DOCS
  //https://mui.com/material-ui/react-button/
  return (
    <div>
      <Stack style={{ marginBottom: "20px" }}>
        <Button variant="outlined" onClick={handleByttPassord}>
          ByttPassord
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" onClick={handleReturnClick}>
          Tilbake
        </Button>
        <Button variant="contained" onClick={handleSaveClick}>
          Oppdater
        </Button>
      </Stack>
      <ButtonErrorAlert vis={visButtonErrorAlert} />
    </div>
  );
}
