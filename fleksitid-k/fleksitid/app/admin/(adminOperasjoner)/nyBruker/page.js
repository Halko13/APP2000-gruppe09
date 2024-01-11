import CSSGrid from "../../../../components/nyBrukerSkjema";
export default function admin() {
    return (
      <main>
        <div>
          hello world! admin - nybruker

          {/* //TODO  */}
          {/* Lage form for bruker info */}
          {/* Brukerinfo skal inneholde:
              * AnsattNr
              * Fornavn
              * Etternavn
              *  Stilling
              *  Passord
              *  Gjenta passord?
              *  jobb epost?
              *  personlig epost?
              *  telefonnummer
              * 
              * Submit button
              */}

              {/* Skal sende data tilbake til firestore db */}
              <CSSGrid />
        </div>
      </main>
    )
  }
  