// Utviklet av Halvor Vilnes

"use client";
import * as React from "react";
import { Item } from "@/hooks/useFormStyle";
import { Box } from "@mui/material";

//komponenter
import VelgBrukerButton from "@/components/Admin/VelgNyBrukerSkjema/VelgBrukerButton";
import NyBrukerSkjema from "@/components/Admin/Bruker/NyBruker/NyBrukerSkjema";
import NyAdminBrukerSkjema from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerSkjema";
import { FinnBrukerErrorAlert } from "@/components/Admin/Bruker/FinnBruker/Alerts";

export default function VelgBrukerSkjema() {
  // Data fra database
  // Skal slettBrukerSkjema vises"
  const [visFinnBrukerErrorAlert, setVisFinnBrukerErrorAlert] =
    React.useState(false);
  const [visNyBrukerSkjema, setVisNyBrukerSkjema] = React.useState(false);
  const [visNyAdminBrukerSkjema, setVisNyAdminBrukerSkjema] =
    React.useState(false);
  // Sjekker nå path
  const handleAnsatt = () => {
    console.log("Ansatt");
    setVisNyBrukerSkjema(true);
    setVisNyAdminBrukerSkjema(false);
  };
  const handleAdmin = () => {
    console.log("Admin");
    setVisNyAdminBrukerSkjema(true);
    setVisNyBrukerSkjema(false);
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
      {visNyBrukerSkjema ? (
        <NyBrukerSkjema />
      ) : visNyAdminBrukerSkjema ? (
        <NyAdminBrukerSkjema />
      ) : (
        <Item>
          <VelgBrukerButton onAnsatt={handleAnsatt} onAdmin={handleAdmin} />
          <FinnBrukerErrorAlert vis={visFinnBrukerErrorAlert} />
        </Item>
      )}
    </Box>
  );
}
