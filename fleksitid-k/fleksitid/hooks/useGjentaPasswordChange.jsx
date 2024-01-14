// useGjentaPasswordChange.js
import * as React from 'react';

export const useGjentaPasswordChange = (onChange) => {
  const handleGjentaPasswordChange = (event) => {
    const { id, value } = event.target;
    onChange((prevData) => ({ ...prevData, [id]: value }));
  };

  return handleGjentaPasswordChange;
};
