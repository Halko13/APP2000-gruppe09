// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/Bruker/FinnBruker/FinnBrukerSkjema";
import OppdaterBrukerTittel from "@/components/Admin/Bruker/OppdaterBruker/OppdaterBrukerTittel";
import { Box } from "@mui/material";

export default function OppdaterBruker() {
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
        <OppdaterBrukerTittel />
        <FinnBrukerSkjema />
      </Box>
    </main>
  );
}
