// Alert.js
import React from "react";
import Alert from "@mui/material/Alert";

export function SuccessAlert({ show }) {
  return show && <Alert severity="success">Ny bruker lagd suksessfullt</Alert>;
}

export function ErrorAlert({ show }) {
  return show && <Alert severity="error">Ansatt nummer finnes fra før</Alert>;
}
