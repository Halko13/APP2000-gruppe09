"use client";

import { useRouter } from 'next/router';
import React, { useState, useEffect} from "react";
import { Typography, ThemeProvider } from '@mui/material';
import AnsattInnlogging from "@/components/AnsattInnlogging";
import AdminInnlogging from "@/components/AdminInnlogging";
import NummerPad from "@/components/NummerPad";
import VelgBrukerListe from "@/components/HenteBruker";
import teama from "./Temaer/Teama";
import { db } from '@/app/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

/*
// Dummy brukere 
const testBrukere = [
    {id: 1, navn: 'Roy Roger', pin: '1234'},
    {id: 2, navn: 'Bob', pin: '5555'},
    {id: 3, navn: 'Hans', pin: '9876'}
];
*/


// Dummy admin brukere
const testAdminBrukere = [
    {brukernavn: 'admin1', passord: 'adminpass1', erAdmin: true}, 
    {brukernavn: 'admin2', passord: 'adminpass2', erAdmin: true}
];

const InnloggingSide = () => {
    // Start verdi 
        // const [valgtBrukerId, setValgtBrukerId] = useState(testBrukere[0].id.toString());
    const [valgtBrukerId, setValgtBrukerId] = useState("");
    const [pin, setPin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [aktivSide, setAktivSide] = useState('VelgBrukerListe');
    const [erAdmin, setErAdmin] = useState(false);

    // Firstore variabler
    const [brukere, setBrukere] = useState([]); // Holder på alle brukere
    const [adminBrukere, setAdminBrukere] = useState([]); // Holder på admin brukere

   // const router  = useRouter();


    // Hente brukere fra firestore
    useEffect(() => {
        const hentBrukere = async () => {
            const brukerCollectionRef = collection(db, "Brukere");
            const brukerData = await getDocs(brukerCollectionRef);
            const brukerListe = brukerData.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBrukere(brukerListe);
            // Admin brukere fra firestore
        }

        hentBrukere();
    }, []);

    // Feil søk
    useEffect(() => {
        console.log(brukere);
    }, [brukere]);

    // Håndterer bruker endring verdier
    const håndterBrukerEndring = (e) => {
        const valgtVerdi = e.target.value;
        const adminBruker = testAdminBrukere.find(admin => admin.brukernavn === valgtVerdi);
        if (adminBruker) {
            setErAdmin(true);
            setValgtBrukerId(adminBruker.brukernavn);
        } else {
            const bruker = brukere.find(bruker => bruker.id === valgtVerdi);
            if (bruker) {
                setErAdmin(false);
                setValgtBrukerId(bruker.id);
            } else {
                setValgtBrukerId('');
            }
        }
        setPin('');
        setLoginStatus('');
    };
    const håndterPinKodeEndring = (e) => {
        setPin(e.target.value);
    };

    const gåTilInnlogging = () => {
        setAktivSide('innlogging');
    };

    // Sjekk av bruker og admin bruker kan logge seg inn
    const validerLogin = () => {
        // Sjekk for admin brukere
        if (erAdmin) {
       const adminBruker = testAdminBrukere.find(admin => admin.brukernavn === valgtBrukerId);
        if (adminBruker && adminBruker.passord === pin) {
        setLoginStatus('Logget inn som admin. Velkommen' + adminBruker.brukernavn + " !");
        // TODO: Viderefør admin brukeren til en autentisert sesjon
        window.location.href = '/admin/nybruker/page';
        return;
        } 
        }

        // Sjekk for vanlige brukere 
        const bruker = brukere.find(bruker => bruker.id === valgtBrukerId);
        if (bruker && bruker.Password === pin) {
            setLoginStatus(`Logget inn. Velkommen ${bruker.Fornavn} ${bruker.Etternavn}!`);
            // TODO: Viderefør brukeren til en autentisert sesjon
        } else {
            setLoginStatus('Innlogin feilet. Feil navn eller pin kode!');
        }
    };

    const håndterInnlogin = (e) => {
        e.preventDefault();
        validerLogin();
    };

    // Tasatur funksjon
    useEffect(() => {
        const håndterTaseTrykk = (e) => {
            if (e.key >= '0' && e.key <= '9') {
                setPin((prevPin) => prevPin + e.key);
            } else if (e.key === 'Enter') {
                validerLogin();
            } else if (e.key === 'Backspace') {
                setPin((prevPin) => prevPin.slice(0, -1));
            }
        };
        window.addEventListener('keydown', håndterTaseTrykk);
        return () => {
            window.removeEventListener('keydown', håndterTaseTrykk);
        };
    }, [pin, validerLogin]); 

    // Nummer pad innloggin
    const håndterNummerKlikk = (nummer) => {
        setPin((forgjePin) => forgjePin + nummer); // Legger til sifferet til PIN-koden
    };

    const håndterSlett = () => {
        setPin((forgjePin) => forgjePin.slice(0, -1)); // Sletter siste siffer
    };

    const håndterEnter = () => {
        håndterInnlogin();
    };

    return (
        <ThemeProvider theme={teama}>
        <div>
            {aktivSide === 'VelgBrukerListe' ? (
                <VelgBrukerListe
                    brukere={brukere}
                    adminBrukere={testAdminBrukere}
                    valgtBrukerId={valgtBrukerId}
                    håndterBrukerEndring={håndterBrukerEndring}
                    gåTilInnlogging={gåTilInnlogging}
                />
            ) : (
                <div>
                    <Typography variant="h2" gutterBottom>
                        Velkommen {
                            erAdmin 
                            ? testAdminBrukere.find(admin => admin.brukernavn === valgtBrukerId)?.brukernavn 
                            : `${brukere.find(bruker => bruker.id === valgtBrukerId)?.Fornavn} ${brukere.find(bruker => bruker.id === valgtBrukerId)?.Etternavn}`
                        }
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Logget på som: {
                            erAdmin 
                            ? testAdminBrukere.find(admin => admin.brukernavn === valgtBrukerId)?.brukernavn || 'Ukjent Admin'
                            : `${brukere.find(bruker => bruker.id === valgtBrukerId)?.Fornavn} ${brukere.find(bruker => bruker.id === valgtBrukerId)?.Etternavn}` || 'Ukjent Bruker'}
                    </Typography>
                    {erAdmin ? (
                <div>
                        <AdminInnlogging
                        adminBruker={testAdminBrukere}
                        passord={pin}
                        vedPassordEndring={håndterPinKodeEndring}
                        vedLoginKlikk={håndterInnlogin}
                        />
                 </div>
                    ) : (
                 <div>
                            <Typography variant="h4" gutterBottom style={{ marginTop: '50px' }}>For skjerminnlogging</Typography>
                            <NummerPad 
                                vedNumKlikk={håndterNummerKlikk} 
                                vedSlett={håndterSlett} 
                                vedEnter={håndterEnter}
                            />
                            <AnsattInnlogging
                                pin={pin}
                                håndterPinnEndring={håndterPinKodeEndring}
                                håndterInnlogin={håndterInnlogin}
                            />
                     </div>
                    )}
                    </div>
                )}
             {loginStatus && <Typography variant="h5" style={{ marginTop: '15px' }}>{loginStatus}</Typography>}
          </div>
          </ThemeProvider>
    );
};


export default InnloggingSide;
