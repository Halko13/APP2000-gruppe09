// Alert.js
import React from "react";
import Alert from "@mui/material/Alert";

export function OppdatertBrukerSuccsessAlert({ vis }) {
  return vis && <Alert severity="success">Oppdatert bruker</Alert>;
}

export function OppdatertBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Ansatt nummer finnes fra før</Alert>;
}
