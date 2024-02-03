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
