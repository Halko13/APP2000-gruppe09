'use client';

import React, { useEffect, useState } from 'react';
import AdminInnlogging from '@/components/AdminInnlogging2';
import teama from '@/components/Temaer/Teama';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';

const AdminInnloggingSide = () => {
    const [brukernavn, setBrukernav] = useState('');
    const [passord, setPassord] = useState('');
    const [feilmelding, setFeilmelding] = useState('');

    //const router = useRouter();

    const vedPassordEndring = (e) => {
        setPassord(e.target.value);
    };

    const validerLogin = async () => {
        try {
            const adminRef = doc(db,'AdminBrukere', brukernavn);
            const adminDoc = await getDoc(adminRef);

            if (!adminDoc.exists()) {
                throw new Error('Admin bruker finnes ikke');
            }
            const adminData = adminDoc.data();
            const likPassord = await bcrypt.compare(passord, adminData.Passord);

            if (!likPassord) {
                throw new Error("Passord er feil");
            }
            // Klarte å logge inn 
            window.location.href = "/admin";
            // router.push('/admin');
        } catch(error) {
            setFeilmelding(error.message);
        }
    };

    return (
        <ThemeProvider theme={teama}>
            <div>
                <AdminInnlogging
                brukernavn={brukernavn}
                passord={passord}
                vedBrukernavnEndring={(e) => setBrukernav(e.target.value)}
                vedPassordEndring={vedPassordEndring}
                vedLoginKlikk={validerLogin}
                feilmelding={feilmelding}
                />
            </div>

        </ThemeProvider>
    );
};

export default AdminInnloggingSide;