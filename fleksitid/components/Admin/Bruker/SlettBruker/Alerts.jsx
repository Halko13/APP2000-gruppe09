//Utviklet av Halvor Vilnes
import React from "react";
import Alert from "@mui/material/Alert";
//Mui component
// https://mui.com/material-ui/react-alert/
export function SlettetBrukerSuccsessAlert({ vis }) {
  return vis && <Alert severity="success">Slettet bruker</Alert>;
}

export function SlettetBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Fikk ikke slettet bruker</Alert>;
}
