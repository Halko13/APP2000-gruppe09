"use client";

import React from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';


const Innlogging = ({brukere, valgtBrukerId, håndterBrukerEndring, 
  pin, håndterPinnEndring, håndterInnlogin }) => {

    return (
    <form onSubmit={håndterInnlogin}>
    <FormControl>
      <InputLabel id="velge-bruker-label">Velg bruker</InputLabel>
      <Select
      labelId="velge-bruker-label"
      id="velge bruker"
      value={valgtBrukerId}
      label="Velg bruker"
      onChange={håndterBrukerEndring}
      >
        {brukere.map((bruker) => (
          <MenuItem key={bruker.id} value={bruker.id} >{bruker.navn}</MenuItem>
        ))}
      </Select>
    </FormControl>


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


<Button variant="contained" type="sumbit" fullWidth>
  Logg inn 
</Button>
 </form>
  );
};

export default Innlogging;