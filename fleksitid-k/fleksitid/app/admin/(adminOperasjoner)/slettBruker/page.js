import React from 'react';
import SlettBrukerSkjema from '@/components/SlettBrukerSkjema';
import SlettBrukerTittel from '@/components/SlettBrukerTittel'; // Corrected import
import { Box } from '@mui/material';

export default function admin() {
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