// Implementer av Halvor
// Kilde:
//https://nextjs.org/docs/app/api-reference/file-conventions/error

"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Noe gikk feil</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Prøv på nytt
      </button>
    </div>
  );
}
