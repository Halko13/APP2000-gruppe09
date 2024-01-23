// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/FinnBruker/FinnBrukerSkjema";
import SlettBrukerTittel from "@/components/Admin/SlettBruker/SlettBrukerTittel"; // Corrected import
import { Box } from "@mui/material";

export default function SlettBruker() {
  return (
    <main>
      <div>
        <Box>
          <SlettBrukerTittel />
          <FinnBrukerSkjema />
        </Box>
      </div>
    </main>
  );
}
