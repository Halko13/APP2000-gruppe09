import { useEffect } from "react";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db, dbCollectionBrukere } from "@/firebase/firebaseConfig";

const TimebankResetter = ({ ansattNr }) => {
  useEffect(() => {
    const resetTimebank = async () => {
      try {
        const ansattRef = doc(db, dbCollectionBrukere, ansattNr);
        const ansattData = (await getDoc(ansattRef)).data();

        // Get the current date
        const currentDate = new Date();
        const resetDate = 1; //Reset dato er 1. i måneden

        if (currentDate.getDate() === resetDate) {
          const updatedTimebank = ansattData.AntallJobbTimer;
          await updateDoc(ansattRef, { Timebank: updatedTimebank });
          //   console.log("Resetting timebank...");
        }
      } catch (error) {
        console.error("Error resetting timebank: ", error);
      }
    };
    resetTimebank();
  }, [ansattNr]);

  return null;
};

export default TimebankResetter;
