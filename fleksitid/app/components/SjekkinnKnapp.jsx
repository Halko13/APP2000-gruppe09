"use client";
import React from 'react';
import Button from '@mui/material/Button';
import styles from '../page.module.css';

const SjekkinnKnapp = () => {
  const [erSjekketInn, setErSjekketInn] = React.useState(true);

  const handleClick = () => {
    // Bytt tilstanden når knappen klikkes
    setErSjekketInn(!erSjekketInn);
  };

  return (
    <div className={styles.knapp}>
      <Button variant="contained" size="large" onClick={handleClick}>
        {erSjekketInn ? 'SJEKK INN' : 'SJEKK UT'}
      </Button>
    </div>
  );
}

export default SjekkinnKnapp;


