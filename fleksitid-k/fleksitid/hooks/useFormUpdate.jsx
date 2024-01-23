export const useFormUpdate = (onChange) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
  };

  return handleChange;
};
