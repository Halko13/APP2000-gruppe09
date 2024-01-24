import React from "react";
import Alert from "@mui/material/Alert";

export function FinnBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Finner ikke bruker</Alert>;
}
