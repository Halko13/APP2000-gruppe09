// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle";
import { Box } from "@mui/material";

//komponenter
import VelgOppdaterBrukerButton from "@/components/Admin/VelgOppdaterBrukerSkjema/VelgOppdaterBrukerButton";

import { FinnBrukerErrorAlert } from "@/components/Admin/Bruker/FinnBruker/Alerts";
import FinnBrukerSkjema from "@/components/Admin/Bruker/FinnBruker/FinnBrukerSkjema";
import FinnAdminBrukerSkjema from "@/components/Admin/Adminbruker/FinnAdminBruker/FinnAdminBrukerSkjema";

export default function VelgOppdaterBrukerSkjema() {
  // Data fra database
  // Skal slettBrukerSkjema vises"
  const [visFinnBrukerErrorAlert, setVisFinnBrukerErrorAlert] =
    React.useState(false);
  const [visFinnBrukerSkjema, setFinnBrukerSkjema] = React.useState(false);
  const [visFinnAdminBrukerSkjema, setVisFinnAdminBrukerSkjema] =
    React.useState(false);

  // Sjekker nå path
  const handleAnsatt = () => {
    console.log("Ansatt");
    setFinnBrukerSkjema(true);
    setVisFinnAdminBrukerSkjema(false);
  };
  const handleAdmin = () => {
    console.log("Admin");
    setVisFinnAdminBrukerSkjema(true);
    setFinnBrukerSkjema(false);
  };
  const handleFormReset = () => {
    setVisFinnAdminBrukerSkjema(false);
    setFinnBrukerSkjema(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {visFinnBrukerSkjema ? (
        <FinnBrukerSkjema onGoBack={handleFormReset} />
      ) : visFinnAdminBrukerSkjema ? (
        <FinnAdminBrukerSkjema onGoBack={handleFormReset} />
      ) : (
        <Item>
          <VelgOppdaterBrukerButton
            onAnsatt={handleAnsatt}
            onAdmin={handleAdmin}
          />
          <FinnBrukerErrorAlert vis={visFinnBrukerErrorAlert} />
        </Item>
      )}
    </Box>
  );
}
