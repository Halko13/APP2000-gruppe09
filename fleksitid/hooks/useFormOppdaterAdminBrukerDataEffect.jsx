import * as React from "react";

export const useFormOppdaterAdminBrukerDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById("Brukernavn").value = formData.Brukernavn;
    document.getElementById("Epost").value = formData.Epost;
  }, [formData]);
};
