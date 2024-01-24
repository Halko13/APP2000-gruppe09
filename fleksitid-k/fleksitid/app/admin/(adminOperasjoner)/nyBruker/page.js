import React from 'react';
import { Box } from '@mui/material';
// Komponenter
import NyBrukerSkjema from '@/components/nyBrukerSkjema';
import NyBrukerTittel from '@/components/nyBrukerTittel';

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