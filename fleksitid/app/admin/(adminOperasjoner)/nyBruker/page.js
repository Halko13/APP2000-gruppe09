// Utviklet av Halvor Vilnes

import React from "react";
import { Box } from "@mui/material";
// Komponenter
import NyBrukerSkjema from "@/components/Admin/NyBruker/NyBrukerSkjema";
import NyBrukerTittel from "@/components/Admin/NyBruker/NyBrukerTittel";

export default function Admin() {
  return (
    <main>
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
        <NyBrukerTittel />
        <NyBrukerSkjema />
      </Box>
    </main>
  );
}
