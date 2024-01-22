// useGjentaPasswordChange.js

export const useGjentaPasswordChange = (onChange) => {
  const handleGjentaPasswordChange = (event) => {
    const { id, value } = event.target;
    const isPasswordValid = /^[0-9]*$/.test(value);
    onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
  };

  return handleGjentaPasswordChange;
};
