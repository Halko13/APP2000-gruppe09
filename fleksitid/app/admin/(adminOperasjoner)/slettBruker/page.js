// Utviklet av Halvor Vilnes

import React from "react";
import SlettBrukerTittel from "@/components/Admin/Bruker/SlettBruker/SlettBrukerTittel";
import VelgSlettBrukerSkjema from "@/components/Admin/VelgSlettBrukerSkjema/VelgSlettBrukerSkjema";
import { Box } from "@mui/material";

export default function SlettBruker() {
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
        <SlettBrukerTittel />
        <VelgSlettBrukerSkjema />
      </Box>
    </main>
  );
}
