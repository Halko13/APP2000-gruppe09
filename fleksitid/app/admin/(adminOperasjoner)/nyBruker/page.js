// Utviklet av Halvor Vilnes

import React from "react";
import { Box } from "@mui/material";
// Komponenter
import VelgBrukerSkjema from "@/components/Admin/VelgNyBrukerSkjema/VelgBrukerSkjema";
import NyBrukerSkjema from "@/components/Admin/Bruker/NyBruker/NyBrukerSkjema";
import NyBrukerTittel from "@/components/Admin/Bruker/NyBruker/NyBrukerTittel";

export default function Admin() {
  return (
    <main>
      <Box
        sx={{
          width: { xs: "50%", sm: "75%", md: "50%" },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NyBrukerTittel />
        <VelgBrukerSkjema />
      </Box>
    </main>
  );
}
