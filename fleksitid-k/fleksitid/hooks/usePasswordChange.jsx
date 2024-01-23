// Utviklet av Halvor Vilnes

export const usePasswordChange = (onChange) => {
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    const isPassordValid = /^[0-9]*$/.test(value); // Changed from isPasswordValid to isPassordValid
    onChange((prevData) => ({
      ...prevData,
      [id]: isPassordValid ? value : "", // Changed from Password to Passord
    }));
  };

  return handlePasswordChange;
};
