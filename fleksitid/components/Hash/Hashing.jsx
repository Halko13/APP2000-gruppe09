// Utviklet av Halvor Vilnes

// https://medium.com/@arunchaitanya/salting-and-hashing-passwords-with-bcrypt-js-a-comprehensive-guide-f5e31de3c40c
// For syntaks
import bcrypt from "bcryptjs";

const saltRounds = 10;

const bcryptHashing = async (passord) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(passord, salt);
    return hash;
  } catch (err) {
    throw err;
  }
};

export default bcryptHashing;
