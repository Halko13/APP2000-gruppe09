import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, ListSubheader  } from '@mui/material';


const VelgBrukerListe = ({brukere, adminBrukere, valgtBrukerId, håndterBrukerEndring, gåTilInnlogging }) => {
   
 const [søkeTekst, setSøkeTekst] = useState("");


    // Søker etter brukere 
    const filtrerteBrukere = søkeTekst
    ? brukere.filter(bruker => 
        `${bruker.Fornavn} ${bruker.Etternavn}`.toLowerCase().includes(søkeTekst.toLowerCase())
      )
    : brukere;

    // Søke etter admin
    const filtrerteAdmins = søkeTekst
    ? adminBrukere.filter(admin => 
        admin.brukernavn && admin.brukernavn.toLowerCase().includes(søkeTekst.toLowerCase())
    )
     : adminBrukere;

    // For søketekstendring
    const håndterSøkeTekstEndring = (e) => {
        setSøkeTekst(e.target.value);
    };

    return (
    <div>
        <FormControl fullWidth margin="normal">
            <InputLabel id="velge-bruker-label">Velg bruker</InputLabel>
            <Select
               labelId="velge-bruker-label"
               id="velge-bruker"
               value={valgtBrukerId}
               label="Velg bruker"
               onChange={håndterBrukerEndring}
               MenuProps={{
                MenuListProps: {
                    subheader: (
                        <ListSubheader component="div">
                            <TextField fullWidth
                            margin="normal"
                            label="Søk etter navnet ditt"
                            value={søkeTekst}
                            onChange={håndterSøkeTekstEndring}
                            placeholder="Skriv her for å søke etter navnet ditt"
                            />

                        </ListSubheader>
                    ),
                },
               }}
             >
                <ListSubheader>Brukere</ListSubheader>
                {filtrerteBrukere && filtrerteBrukere.map(bruker => (
                <MenuItem key={bruker.id} value={bruker.id}>
                {` (${bruker.AnsattNr}) ${bruker.Fornavn ? bruker.Fornavn : 'Ukjent'} ${bruker.Etternavn ? bruker.Etternavn : ''}`}
                </MenuItem>
              ))}

                <ListSubheader>Admin</ListSubheader>
                {filtrerteAdmins && filtrerteAdmins.map(admin => (
                <MenuItem key={admin.brukernavn} value={admin.brukernavn}>
                {` (${admin.Ansattnr}) ${admin.brukernavn} `}
               </MenuItem>
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