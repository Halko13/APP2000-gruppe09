import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const AdminInnlogging = ({ adminBruker, vedPassordEndring, vedLoginKlikk, passord }) => {
 return (
    <div>
    <Typography variant="h6">{adminBruker.brukernavn}</Typography>
    <TextField
        fullWidth
        type="password"
        label="Password"
        placeholder="Enter your password"
        margin="normal"
        value={passord}
        onChange={vedPassordEndring}
    />
        <Button 
        variant="contained" 
        onClick={vedLoginKlikk} 
        fullWidth 
        style={{ marginTop: '20px' }}
      >
        Logg inn som admin
      </Button>
    </div>
 );   
};

export default AdminInnlogging