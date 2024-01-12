"use client";

import React, { useState } from "react";

import Innlogging from "../components/innlogging-components";

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

    return (
        <div>
            <h2>Logg inn</h2>
            console.log(testBrukere);
            <Innlogging
            brukere={testBrukere}
            valgtBrukerId={valgtBrukerId}
            håndterBrukerEndring={håndterBrukerEndring} 
            pin={pin}
            håndterPinnEndring={håndterPinKodeEndring}
            håndterInnlogin={håndterInnlogin}
            />
            {loginStatus && <p>{loginStatus}</p>}
        </div>
    );
};

export default InnloggingSide;