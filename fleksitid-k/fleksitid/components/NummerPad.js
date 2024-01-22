import React from 'react';
import { Button, Grid } from '@mui/material';

const NummerPad = ({vedNumKlikk, vedSlett, vedEnter}) => {
    const håndterNummerKlikk = (nøkkel) => {
        if (nøkkel === '⌫') {
            vedSlett(); // for å slette det siste tegnet
        } else if (ke === '✓' ) {
            vedEnter(); // når brukeren trykker på sjekkmerket
        } else {
            vedNumKlikk(); // for å legge til nummeret i PIN-koden
        }
    };

    const nummerPadTegn = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '⌫', '0', '✓'
    ];

    return (
        <Grid container spacing={1}>
            {nummerPadTegn.map(nøkkel => (
                <Grid item xs={4} key={nøkkel}>
                    <Button
                        variant ="outlined"
                        onClick={() => håndterNummerKlikk(nøkkel)}
                        sx={{ width: '100%', height: '64px', fontSize: '24px' }}
                        >
                            {nøkkel}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default NummerPad;