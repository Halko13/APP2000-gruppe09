// Utviklet av Halvor Vilnes

import argon2 from "argon2";

const HashPassord = async (passord) => {
  try {
    const hash = await argon2.hash(passord);
    return hash;
  } catch (err) {
    // Handle error if needed
    console.error("Error hashing password:", err);
    throw err; // Re-throwing the error for further handling, or remove if not needed
  }
};

export default HashPassord;
