"use client";

import React, { useState } from "react";
import { Typography } from '@mui/material';
import Innlogging from "@/components/loginng";
import NummerPad from "@/components/NummerPad";

// Dummy brukere 
const testBrukere = [
    {id: 1, navn: 'Roy Roger', pin: '1234'},
    {id: 2, navn: 'Bob', pin: '5555'},
    {id: 3, navn: 'Hans', pin: '9876'}
];

const InnloggingSide = () => {
    // Start verdi 
    const [valgtBrukerId, setValgtBrukerId] = useState(testBrukere[0].id);
    const [pin, setPin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const håndterBrukerEndring = (event) => {
        setValgtBrukerId(event.target.value);
    }

    const håndterPinKodeEndring = (event) => {
        setPin(event.target.value);
    };

    const validerLogin = () => {
        const bruker = testBrukere.find(bruker => bruker.id === parseInt(valgtBrukerId));
        if (bruker && bruker.pin === pin) {
            setLoginStatus('Logget inn. Velkommen ' + bruker.navn + " !");
            // TODO: Viderefør brukeren til en autentisert sesjon
        } else {
            setLoginStatus('Innlogin feilet. Feil navn eller pin kode!');
        }
    };

    const håndterInnlogin = (event) => {
        event.preventDefault();
        validerLogin();
    };

    // Nummer pad innloggin
    const håndterNummerKlikk = (nummer) => {
        setPin(pin + nummer); // Legger til sifferet til PIN-koden
    };

    const håndterSlett = () => {
        setPin(pin.slice(0, -1)); // Sletter siste siffer
    };

    const håndterEnter = () => {
        validerLogin(); // Utfører innlogging
    };

    return (
        <div>
            <Typography variant="h2" gutterBottom>Logg inn</Typography>
            <Innlogging
            brukere={testBrukere}
            valgtBrukerId={valgtBrukerId}
            håndterBrukerEndring={håndterBrukerEndring} 
            pin={pin}
            håndterPinnEndring={håndterPinKodeEndring}
            håndterInnlogin={håndterInnlogin}
            />
            {loginStatus && <Typography style={{ marginTop: '15px' }}>{loginStatus}</Typography>}
            
            <Typography variant="h4" gutterBottom style={{ marginTop: '70px' }}>
            For skjerminnlogging
            </Typography>
            <NummerPad onNumClick={håndterNummerKlikk} onDelete={håndterSlett} onEnter={håndterEnter}/>
        </div>
    );
};

export default InnloggingSide;

            /*
            <Button variant="contained" onClick={håndterInnlogin} fullWidth style={{ marginTop: '20px' }}>
            Logg inn
            </Button>
            */