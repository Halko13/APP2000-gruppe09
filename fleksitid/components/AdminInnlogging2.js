import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const AdminInnlogging = ({brukernavn, passord, vedBrukernavnEndring, 
    vedPassordEndring, vedLoginKlikk, feilmelding}) => {
return (
    <div>
        <Typography variant='h6'>Admin Innlogging</Typography>
        <TextField
        fullWidth
        label="Brukernavn"
        placeholder="Skriv inn ditt brukernavn"
        margin="normal"
        value={brukernavn}
        onChange={vedBrukernavnEndring}
        />
        <TextField
        fullWidth
        type="password"
        label="Passord"
        placeholder="Skriv inn ditt passord"
        margin="normal"
        value={passord}
        onChange={vedPassordEndring}
        />
        <Button
        variant="contained"
        onClick={vedLoginKlikk}
        fullWidth
        style={{ marginTop: '20px'}}
        >
            Logg inn som admin
        </Button>
        {feilmelding && (
            <Typography color="error" style={{ marginTop: '20px'}}>
                {feilmelding}
            </Typography>
        )}
    </div>
);
};

export default AdminInnlogging;