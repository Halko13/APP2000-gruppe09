export const useFormUpdate = (onChange) => {
  const handleChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
  };

  return handleChange;
};
