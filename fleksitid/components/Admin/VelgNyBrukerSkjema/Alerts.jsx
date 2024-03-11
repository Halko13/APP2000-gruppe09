//Utviklet av Halvor Vilnes

import React from "react";
import Alert from "@mui/material/Alert";
//Hentet fra MUI alerts
//https://mui.com/material-ui/react-alert/
export function FinnBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Finner ikke bruker</Alert>;
}
export function ButtonErrorAlert({ vis }) {
  return vis && <Alert severity="error">Fyll inn ansatt nummer</Alert>;
}
