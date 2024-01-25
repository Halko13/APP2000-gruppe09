// Forfatter Christopher Westergren

import React from 'react'
import ResponsiveAppBar from '../components/NavBar'
import styles from '../page.module.css'
import Klokke from '../components/Klokke'
import SjekkinnKnapp from '../components/SjekkinnKnapp'

const SjekkInn = () => {
  let dato = new Date().toLocaleDateString();
  let navn = "Erik";
  return (
    <>
        <ResponsiveAppBar />
        <h1 className={styles.velkommen}>Velkommen {navn}! </h1>
        <h1 className={styles.dato}>Dagens dato: {dato}</h1>
        {/* Bruker suppressHydrationWarning for å unngå feilmelding
        om at tiden på klientsiden og serversiden ikke stemmer! */}
        <Klokke suppressHydrationWarning />
        <h1 className={styles.ov}>Gjenværende tid i dag: 7:59</h1>
        <SjekkinnKnapp />
    </>
  )
}

export default SjekkInn