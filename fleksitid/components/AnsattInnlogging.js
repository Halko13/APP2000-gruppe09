// Innlogging.js
import React from "react";
import { Typography, TextField, Button} from '@mui/material';

const AnsattInnlogging = ({valgtBrukerNavn, pin, håndterPinEndring, håndterInnlogin }) => {
  return (
    <form onSubmit={håndterInnlogin}>
      <form onSubmit={håndterInnlogin}>
        <Typography variant="h5" gutterBottom>
          {valgtBrukerNavn}
        </Typography>
      </form>

      <TextField
        fullWidth
        id="pin"
        type="password"
        label="PIN-kode"
        placeholder="PIN-kode"
        margin="normal"
        value={pin}
        onChange={håndterPinEndring}
      />

      <Button variant="contained" type="submit" fullWidth>
        Logg inn
      </Button>
    </form>
  );
};

export default AnsattInnlogging;
