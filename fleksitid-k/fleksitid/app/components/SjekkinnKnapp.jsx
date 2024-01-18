"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../page.module.css'

const SjekkinnKnapp = () => {
  let inn = "SJEKK INN"
  let ut = "SJEKK UT"
  return (
    <div className={styles.knapp}>
    <Button variant="contained" size="large" onClick={() => {
    alert('clicked');
  }}>
          {inn}
        </Button>
    </div>
  )
}

export default SjekkinnKnapp


