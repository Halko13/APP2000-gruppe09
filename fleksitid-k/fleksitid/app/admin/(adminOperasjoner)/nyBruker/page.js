// Utviklet av Halvor Vilnes

import React from "react";
import { Box } from "@mui/material";
// Komponenter
import NyBrukerSkjema from "@/components/Admin/NyBruker/NyBrukerSkjema";
import NyBrukerTittel from "@/components/Admin/NyBruker/NyBrukerTittel";

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
