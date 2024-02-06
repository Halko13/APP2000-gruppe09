// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/FinnBruker/FinnBrukerSkjema";
import SlettBrukerTittel from "@/components/Admin/SlettBruker/SlettBrukerTittel";
import { Box } from "@mui/material";

export default function SlettBruker() {
  return (
    <main>
      <div>
        <Box
          sx={{
            width: { xs: "100%", sm: "75%", md: "50%" },
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
      </div>
    </main>
  );
}
