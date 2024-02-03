// Utviklet av Halvor Vilnes
import React from "react";
import Alert from "@mui/material/Alert";
//Hentet fra MUI alerts
//https://mui.com/material-ui/react-alert/
export function ByttPassordSuccsessAlert({ vis }) {
  return vis && <Alert severity="success">Passord endret</Alert>;
}

export function ByttPassordErrorAlert({ vis }) {
  return (
    vis && (
      <Alert severity="error">Fyll inn alle feltene og passord må matche</Alert>
    )
  );
}
export function ButtonErrorAlert({ vis }) {
  return (
    vis && (
      <Alert severity="error">Fyll inn alle feltene og passord må matche</Alert>
    )
  );
}
export function HashingErrorAlert({ vis }) {
  return vis && <Alert severity="error">Noe feil skjedde, prøv på nytt</Alert>;
}
