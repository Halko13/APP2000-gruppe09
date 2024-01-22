import React from 'react';
import FinnBrukerSkjema from '@/components/FinnBrukerSkjema';
import SlettBrukerTittel from '@/components/SlettBrukerTittel'; // Corrected import
import { Box } from '@mui/material';

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