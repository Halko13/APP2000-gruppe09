// Utviklet av Halvor Vilnes

export const useAdminPassordEndring = (onChange) => {
  const handlePassordEndring = (e) => {
    const { id, value } = e.target;
    onChange((prevData) => ({
      ...prevData,
      [id]: value, // Changed from Password to Passord
    }));
  };

  return handlePassordEndring;
};
