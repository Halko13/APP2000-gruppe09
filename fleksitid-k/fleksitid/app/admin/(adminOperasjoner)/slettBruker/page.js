<<<<<<< HEAD
import React from 'react';
import SlettBrukerSkjema from '@/components/SlettBrukerSkjema';
import SlettBrukerTittel from '@/components/SlettBrukerTittel'; // Corrected import
import { Box } from '@mui/material';
=======
// Utviklet av Halvor Vilnes

import React from "react";
import FinnBrukerSkjema from "@/components/Admin/FinnBruker/FinnBrukerSkjema";
import SlettBrukerTittel from "@/components/Admin/SlettBruker/SlettBrukerTittel"; // Corrected import
import { Box } from "@mui/material";
>>>>>>> admin-alerts

export default function SlettBruker() {
  return (
    <main>
      <div>
        <Box>
          <SlettBrukerTittel />
          <SlettBrukerSkjema />
        </Box>
      </div>
    </main>
  );
}
