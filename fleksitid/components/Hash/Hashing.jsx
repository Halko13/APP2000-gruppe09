// Utviklet av Halvor Vilnes

// import argon2 from "argon2";

// const HashPassord = async (passord) => {
//   try {
//     const hash = await argon2.hash(passord);
//     return hash;
//   } catch (err) {
//     // Handle error if needed
//     console.error("Error hashing password:", err);
//     throw err; // Re-throwing the error for further handling, or remove if not needed
//   }
// };

import bcrypt from "bcryptjs";

const saltRounds = 10;

const bcryptHashing = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.error("Error hashing password:", err);
    throw err;
  }
};

export default bcryptHashing;
