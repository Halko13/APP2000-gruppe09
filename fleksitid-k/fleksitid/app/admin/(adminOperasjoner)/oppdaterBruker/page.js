// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/FinnBrukerSkjema";
import OppdaterBrukerTittel from "@/components/OppdaterBrukerTittel"; // Corrected import
import { Box } from "@mui/material";

export default function OppdaterBruker() {
  return (
    <main>
      <div>
        <Box>
          <OppdaterBrukerTittel />
          <FinnBrukerSkjema />
        </Box>
      </div>
    </main>
  );
}
