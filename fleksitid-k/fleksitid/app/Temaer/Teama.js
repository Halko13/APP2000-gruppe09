import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// Teama
const teama = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: purple[300],
        }
    },
});

export default teama;

