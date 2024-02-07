// Utviklet av Halvor Vilnes

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonErrorAlert } from "@/components/Admin/Bruker/NyBruker/Alerts";
export default function NyBrukerButton({
  onSave,
  isFormValid,
  onFormReset,
  onReturn,
}) {
  const [visButtonErrorAlert, setVisButtonErrorAlert] = React.useState(false);
  const handleSaveClick = () => {
    if (isFormValid) {
      onSave();
      onFormReset();
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
    onFormReset();
    setVisButtonErrorAlert(false);
  };

  //Hentet fra MUI doc
  // https://mui.com/material-ui/react-button/
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="contained" onClick={handleSaveClick}>
          Send
        </Button>
        <Button variant="outlined" onClick={handleResetClick}>
          Reset
        </Button>
      </Stack>
      <Stack sx={{ pt: 2 }}>
        <Button variant="outlined" onClick={onReturn}>
          Tilbake
        </Button>
      </Stack>
      <ButtonErrorAlert vis={visButtonErrorAlert} />
    </div>
  );
}
