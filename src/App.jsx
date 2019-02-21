import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useInputValidation } from './components/hooks/index';

const App = () => {
  const name = useInputValidation('John', 'text');
  const numbers = useInputValidation('123456', 'numbers');

  return (
    <div className="App">
      <div style={{height: '400px'}}>
        <input {...name} />
      </div>
      <div style={{height: '400px'}}>
        <input {...numbers} />
      </div>
    </div>
  );
}


export default App;
