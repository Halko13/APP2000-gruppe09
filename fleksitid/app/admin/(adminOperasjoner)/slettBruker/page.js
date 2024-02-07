// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/Bruker/FinnBruker/FinnBrukerSkjema";
import SlettBrukerTittel from "@/components/Admin/Bruker/SlettBruker/SlettBrukerTittel";
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
        <FinnBrukerSkjema />
      </Box>
    </main>
  );
}
