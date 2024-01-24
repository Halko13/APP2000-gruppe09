// Utviklet av Halvor Viles
import React from "react";
import Alert from "@mui/material/Alert";

//Hentet fra MUI alerts
//https://mui.com/material-ui/react-alert/
export function SuccessAlert({ vis }) {
  return vis && <Alert severity="success">Ny bruker lagd suksessfullt</Alert>;
}

export function ErrorAlert({ vis }) {
  return vis && <Alert severity="error">Ansatt nummer finnes fra før</Alert>;
}

export function ButtonErrorAlert({ vis }) {
  return (
    vis && (
      <Alert severity="error">Fyll inn alle feltene og passord må matche</Alert>
    )
  );
}
