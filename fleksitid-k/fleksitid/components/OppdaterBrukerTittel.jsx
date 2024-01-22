import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function OppdaterBrukerTittel() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, textAlign: 'center', margin: '0 auto', padding: '2rem' }}>
      <Typography variant="h1" sx={{ fontSize: '2rem' }} gutterBottom>
        Oppdater en bruker
      </Typography>
    </Box>
  );
}
