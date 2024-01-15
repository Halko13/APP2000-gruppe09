import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';


const VelgBrukerListe = ({brukere, valgtBrukerId, håndterBrukerEndring, gåTilInnlogging }) => {
   
    const [søkeTekst, setSøkeTekst] = useState("");

    // Funksjon for hente bruker basert på søk
    const filtertBruker = søkeTekst
    ? brukere.filter((bruker) => 
    bruker.navn.toLowerCase().includes(søkeTekst.toLowerCase())
    )
    : brukere;

    // Oppdater funksjonen for søketekstendring
    const håndterSøkeTekstEndring = (e) => {
        setSøkeTekst(e.target.value);
    };

   
    return (
    <div>
        <TextField fullWidth margin="normal"
        label="Søk etter navnet ditt"
        value={søkeTekst}
        onChange={håndterSøkeTekstEndring}
        placeholder="Skriv her for å søke etter navnet ditt"
        />
        
        <FormControl fullWidth margin="normal">
        <InputLabel id="velge-bruker-label">Velg bruker</InputLabel>
        <Select
                labelId="velge-bruker-label"
                id="velge-bruker"
                value={valgtBrukerId}
                label="Velg bruker"
                onChange={håndterBrukerEndring}
        >
            {filtertBruker.map((bruker) => (
            <MenuItem key={bruker.id} value={bruker.id}>{bruker.navn}</MenuItem>

            ))}
        </Select>
        </FormControl>
        <Button variant="contained" onClick={gåTilInnlogging} fullWidth>
            Gå til pin innloggin
         </Button>
    </div>
   );
};

export default VelgBrukerListe;