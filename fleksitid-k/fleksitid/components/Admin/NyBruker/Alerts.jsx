// Alert.js
import React from "react";
import Alert from "@mui/material/Alert";

export function SuccessAlert({ vis }) {
  return vis && <Alert severity="success">Ny bruker lagd suksessfullt</Alert>;
}

export function ErrorAlert({ vis }) {
  return vis && <Alert severity="error">Ansatt nummer finnes fra før</Alert>;
}
