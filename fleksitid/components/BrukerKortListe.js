import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BrukerKortListe = ({ bruker, valgtKort, påValgt }) => {
    const erValgtKort = valgtKort === bruker.id; // Sjekk om kort er valgt
    return (
     <Card sx={{ display: 'flex', marginBottom: '10px',
                border: erValgtKort ? '4px solid blue' : 'none'}}
                onClick={() => påValgt(bruker.id)}
             >

        <CardMedia
        component={"img"}
        sx={{ width: 150}}
        image="https://placehold.co/100x100"
        alt={`Bilde av ${bruker.Fornavn} ${bruker.Etternavn}`}
        />

        <CardContent sx={{ flex: '1 auto'}}>
            <Typography component="div" variant='h5'>
                {bruker.Fornavn} {bruker.Etternavn}
            </Typography>
            <Typography variant='subtitle1' color="text.secondary" component="div">
            {` Ansattnummer:  (${bruker.AnsattNr}) `}
            </Typography>
            <Typography variant='subtitle1' color="text.secondary" component="div">
             {`Stilling: ${bruker.Stilling} `}    
            </Typography>
            <Typography variant='subtitle1' color="text.secondary" component="div">
             {`Avdeling: ${bruker.Avdeling} `}    
            </Typography>
            <Typography variant='subtitle1' color="text.secondary" component="div">
             {`Innlogging status: ${bruker.Innlogget} `}    
            </Typography>

        </CardContent>
     </Card>
    );
};

const BrukerListe = ({ brukere, valgtKort, påValgt }) => {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
            {brukere.map((bruker) => (
             <BrukerKortListe 
             key={bruker.id} 
             bruker={bruker}
             valgtKort={valgtKort}
             påValgt={påValgt} 
          />
          ))}
        </Box>
    );
};

export default BrukerListe;