import React from 'react'
import ResponsiveAppBar from '../components/NavBar'
import styles from '../page.module.css'

const Knapp = () => {
  return (
    <>
        <ResponsiveAppBar />
        <h1 className={styles.ov}>Hei!</h1>
    </>
  )
}

export default Knapp