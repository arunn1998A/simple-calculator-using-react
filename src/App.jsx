import React, { useState } from 'react';
import './App.css';

const CalculatorApp = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input className='hie' type="text" value={input} readOnly />
      <div className="buttons">
        {[1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '-', 0, '.', '+'].map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={handleClear}>AC</button>
        <button className='j' onClick={handleDelete}>Delete</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
