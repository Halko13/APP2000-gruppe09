const TimebankResetter = ({ ansattNr, resetHour }) => {
  useEffect(() => {
    const resetTimebank = async () => {
      try {
        const ansattRef = doc(db, dbCollectionBrukere, ansattNr);
        const ansattData = (await getDoc(ansattRef)).data();

        const resetDate = 1; //Reset dato er 1. i måneden
        const resetHour = 0; //Reset time er kl 00:00
        // Get the current date
        const currentDate = new Date();
        // console.log("Current date: ", currentDate);

        if (
          currentDate.getDate() === resetDate &&
          currentDate.getHours() === resetHour
        ) {
          const updatedTimebank = ansattData.AntallJobbTimer;
          await updateDoc(ansattRef, { Timebank: updatedTimebank });
          //   console.log("Resetting timebank...");
        }
      } catch (error) {
        console.error("Error resetting timebank: ", error);
      }
    };
    resetTimebank();
  }, [ansattNr, resetHour]);

  return null;
};
