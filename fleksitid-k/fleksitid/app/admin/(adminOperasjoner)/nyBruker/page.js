// Utviklet av Halvor Vilnes

import React from "react";
import { Box } from "@mui/material";
// Komponenter
import NyBrukerSkjema from "@/components/NyBrukerSkjema";
import NyBrukerTittel from "@/components/NyBrukerTittel";

export default function Admin() {
  return (
    <main>
      <div>
        <Box>
          <NyBrukerTittel />
          <NyBrukerSkjema />
        </Box>
      </div>
    </main>
  );
}
