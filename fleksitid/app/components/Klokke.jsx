// Inspirasjon til klokke er hentet fra:
// https://www.youtube.com/watch?v=T_lFnwLiATc

"use client";
import { useState } from 'react'
import styles from "../styles/klokke.module.css"

const Klokke = () => {
    let tid = new Date().toLocaleTimeString();
    const [nåværendeTid, setNåværendeTid] = useState(tid);

    const updateTid = () => {
        let tid = new Date().toLocaleTimeString();
        setNåværendeTid(tid);
    }
    
    setInterval(updateTid, 1000)

  return (
    <div className={styles.klokke}>
        <h1>{nåværendeTid}</h1>
    </div>
  )
}

export default Klokke