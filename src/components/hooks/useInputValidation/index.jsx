import { useState } from 'react';

const useInputValidation = (initialState, validationType) => {
  console.log(initialState, ' and ', validationType)
  const letters = /^[A-Za-z]+$/;
  const numbers = /^[0-9]+$/;
  const [ value, setValue ] = useState(initialState);

  const handleChange = (e) => {
    switch (validationType) {
      case 'text':
        if (e.target.value.match(letters)) setValue(e.target.value);
        break;
      case 'numbers':
        if (e.target.value.match(numbers)) setValue(e.target.value);
        break;
      default:
        setValue(e.target.value);
        break;
    }
  }

  return {
    value,
    onChange: handleChange
  };
}

export default useInputValidation;
