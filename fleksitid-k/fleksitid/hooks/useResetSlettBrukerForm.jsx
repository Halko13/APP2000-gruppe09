// Utviklet av Halvor Vilnes

import * as React from "react";

export const useResetSlettBrukerForm = (formData) => {
  React.useEffect(() => {
    document.getElementById("AnsattNr").value = formData.AnsattNr;
  }, [formData]);
};
