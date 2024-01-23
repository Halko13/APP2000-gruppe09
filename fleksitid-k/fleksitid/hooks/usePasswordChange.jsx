// Utviklet av Halvor Vilnes

export const usePasswordChange = (onChange) => {
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    const isPasswordValid = /^[0-9]*$/.test(value);
    onChange((prevData) => ({
      ...prevData,
      [id]: isPasswordValid ? value : "",
    }));
  };

  return handlePasswordChange;
};
