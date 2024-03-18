//Utviklet av Halvor Vilnes
import React from "react";
import Alert from "@mui/material/Alert";
//Mui component
// https://mui.com/material-ui/react-alert/
export function SlettetAdminBrukerSuccsessAlert({ vis }) {
  return vis && <Alert severity="success">Slettet admin bruker</Alert>;
}

export function SlettetAdminBrukerErrorAlert({ vis }) {
  return vis && <Alert severity="error">Fikk ikke slettet admin bruker</Alert>;
}
