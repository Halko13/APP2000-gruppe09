// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/FinnBruker/FinnBrukerSkjema";
import OppdaterBrukerTittel from "@/components/Admin/OppdaterBruker/OppdaterBrukerTittel";
import { Box } from "@mui/material";

export default function OppdaterBruker() {
  return (
    <main>
      <div>
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
      </div>
    </main>
  );
}
