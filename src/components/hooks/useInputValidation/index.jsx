import { useState } from 'react';


/* This is a very quick and dirty version of what could be used.
  Things i do not like, the function is run after every render, i tried using "useMemo" but had issues with compiling,
  didn't want to spend to long on this proof of concept.

  What this funciton does.
  Params = initial state to be loaded. validation type needed
  creates local state and a way to update it
  returns an object that has value and onchange method for the input.

  useage example, see app.jsx or below is an example that will only allow character a-z or A-Z

  const name = useInputValidation('myName', 'text')
  <input {...name} />
*/
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
