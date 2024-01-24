// usePasswordChange.js
import * as React from 'react';

export const usePasswordChange = (onChange) => {
  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    const isPasswordValid = /^[0-9]*$/.test(value);
    onChange((prevData) => ({ ...prevData, [id]: isPasswordValid ? value : '' }));
  };

  return handlePasswordChange;
};
