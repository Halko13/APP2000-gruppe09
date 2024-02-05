// Utviklet av Halvor Vilnes

// https://medium.com/@arunchaitanya/salting-and-hashing-passwords-with-bcrypt-js-a-comprehensive-guide-f5e31de3c40c
// For syntaks
import bcrypt from "bcryptjs";

const bcryptVerify = async (pin, hashedPassord) => {
  try {
    const erLikt = await bcrypt.compare(pin, hashedPassord);
    return erLikt;
  } catch (err) {
    throw err;
  }
};

export default bcryptVerify;
