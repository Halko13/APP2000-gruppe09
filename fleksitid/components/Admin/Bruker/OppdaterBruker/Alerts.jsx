// Utviklet av Halvor Vilnes
import React from "react";
import Alert from "@mui/material/Alert";
//Hentet fra MUI alerts
//https://mui.com/material-ui/react-alert/
export function OppdatertBrukerSuccsessAlert({ vis }) {
  return vis && <Alert severity="success">Oppdatert bruker</Alert>;
}

export function OppdatertBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Ansatt nummer finnes fra før</Alert>;
}

export function OppdatertBrukerInfoAlert({ vis }) {
  return vis && <Alert severity="info">Ingen ting er endret</Alert>;
}

export function ButtonErrorAlert({ vis }) {
  return (
    vis && (
      <Alert severity="error">Fyll inn alle feltene og passord må matche</Alert>
    )
  );
}
