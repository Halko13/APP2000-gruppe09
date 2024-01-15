"use client";

import React, { useState, useEffect} from "react";
import { Typography } from '@mui/material';
import Innlogging from "@/components/loginng";
import NummerPad from "@/components/NummerPad";
import VelgBrukerListe from "@/components/HenteBruker";

// Dummy brukere 
const testBrukere = [
    {id: 1, navn: 'Roy Roger', pin: '1234'},
    {id: 2, navn: 'Bob', pin: '5555'},
    {id: 3, navn: 'Hans', pin: '9876'}
];

// TODO: Lage dummy admin brukere

const InnloggingSide = () => {
    // Start verdi 
    const [valgtBrukerId, setValgtBrukerId] = useState(testBrukere[0].id);
    const [pin, setPin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [aktivSide, setAktivSide] = useState('VelgBrukerListe');

    const håndterBrukerEndring = (e) => {
        setValgtBrukerId(e.target.value);
    }

    const håndterPinKodeEndring = (e) => {
        setPin(e.target.value);
    };

    const gåTilInnlogging = () => {
        setAktivSide('innlogging');
    }

    const validerLogin = () => {
        const bruker = testBrukere.find(bruker => bruker.id === parseInt(valgtBrukerId));
        if (bruker && bruker.pin === pin) {
            setLoginStatus('Logget inn. Velkommen ' + bruker.navn + "!");
            // TODO: Viderefør brukeren og admin bruker til en autentisert sesjon
        } else {
            setLoginStatus('Innlogin feilet. Feil navn eller pin kode!');
        }
    };

    const håndterInnlogin = (e) => {
        e.preventDefault();
        validerLogin();
    };

    // Kunne skrive på tasaturet også
    useEffect(() => {
        const håndterTasatur = (e) => {
            if (e.key >= '0' && e.key <= '9') {
                setPin((forgjePin) => forgjePin + e.key);
            }
            if (e.key === 'Enter') {
                validerLogin();
            }
            if (e.key === 'Backspace') {
                setPin((forgjePin) => forgjePin.slice(0, -1));
            }
        };

        window.addEventListener('keydown', håndterTasatur);
        return () => {
            window.removeEventListener('keydown', håndterTasatur);
        };
    }, []);

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
             {aktivSide === 'VelgBrukerListe' ? (
                <VelgBrukerListe
                brukere={testBrukere}
                valgtBrukerId={valgtBrukerId}
                håndterBrukerEndring={håndterBrukerEndring}
                gåTilInnlogging={gåTilInnlogging}
                />
            ) : (
            <div>
           <Typography variant="h2" gutterBottom>Velkommen (navn her)</Typography>
           <Typography variant="h5">{testBrukere.find(bruker => bruker.id === valgtBrukerId).navn}</Typography>
           <Typography variant="h2" gutterBottom>Bilde her</Typography>
            <Typography variant="h4" gutterBottom style={{ marginTop: '50px' }}>
            For skjerminnlogging
            </Typography>

            <NummerPad 
            vedNumKlikk={håndterNummerKlikk} 
            vedSlett={håndterSlett} 
            vedEnter={håndterEnter}
            />
            
            <Innlogging
            pin={pin}
            håndterPinnEndring={håndterPinKodeEndring}
            håndterInnlogin={håndterInnlogin}
            />
            </div>
            )}
         {loginStatus && <Typography variant="h5" style={{ marginTop: '15px' }}>{loginStatus}</Typography>}
        </div>
    );
};

export default InnloggingSide;

            /*
            <Button variant="contained" onClick={håndterInnlogin} fullWidth style={{ marginTop: '20px' }}>
            Logg inn
            </Button>
            */