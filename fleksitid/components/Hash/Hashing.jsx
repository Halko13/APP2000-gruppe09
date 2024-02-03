// Utviklet av Halvor Vilnes

import bcrypt from "bcryptjs";

const saltRounds = 10;

const bcryptHashing = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
};

export default bcryptHashing;
