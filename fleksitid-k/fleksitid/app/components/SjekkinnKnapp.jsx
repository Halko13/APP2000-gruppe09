import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../page.module.css'

const SjekkinnKnapp = () => {
  return (
    <div className={styles.knapp}>
    <Button variant="contained" size="large" >
          SJEKK INN
        </Button>
    </div>
  )
}

export default SjekkinnKnapp


