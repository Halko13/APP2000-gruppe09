import React from 'react';
import NyBrukerSkjema from '@/components/nyBrukerSkjema';
import NyBrukerTittel from '@/components/nyBrukerTittel'; // Corrected import
import { Box } from '@mui/material';

export default function Admin() {
  return (
    <main>
      <div>
        <Box>
          <NyBrukerTittel /> {/* Corrected component name */}
          <NyBrukerSkjema />
        </Box>
      </div>
    </main>
  );
}