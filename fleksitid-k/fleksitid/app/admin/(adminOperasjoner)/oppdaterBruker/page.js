// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/FinnBruker/FinnBrukerSkjema";
import OppdaterBrukerTittel from "@/components/Admin/OppdaterBruker/OppdaterBrukerTittel";
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
