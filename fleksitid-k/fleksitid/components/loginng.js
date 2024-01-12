"use client";

import React from "react";

const Innlogging = ({brukere, valgtBrukerId, håndterBrukerEndring, 
  pin, håndterPinnEndring, håndterInnlogin }) => {

    return (
    <form onSubmit={håndterInnlogin}>
      <label htmlFor="velge-bruker">Velg bruker:</label>
      <select id="velge-bruker" onChange={håndterBrukerEndring} value={valgtBrukerId}>
      {brukere.map((bruker) => (
  <option key={bruker.id} value={bruker.id}>{bruker.navn}</option>

))}
      </select>
      <label htmlFor="pin">PIN:</label>
      <input
      type="password"
      id="pin"
      name="pin"
      placeholder="PIN-kode"
      onChange={håndterPinnEndring}
      value={pin}
      />
      <button type="submit">Log inn</button>
    </form>
    );
};

export default Innlogging;