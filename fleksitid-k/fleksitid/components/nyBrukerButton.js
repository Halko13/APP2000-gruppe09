import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-end">
      <Button variant="contained" onClick={() => {
            // Når blir klikket på
            alert('clicked');
        }}>
        Send
      </Button>
    </Stack>
  );
}
