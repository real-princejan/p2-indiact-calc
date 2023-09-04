import React, { useState } from 'react';

import "./Calc.css";

const Calc = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  
  const handleNum1Change = (event) => {
    // Validate input to accept only integer or float values
    const value = event.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (event) => {
    // Validate input to accept only integer or float values
    const value = event.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setNum2(value);
    }
  };

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <>
    <h2>React Calculator</h2>
    <div className='buttons'>
      <input type="text" value={num1} onChange={handleNum1Change} placeholder='Input 1st number' />
      <input type="text" value={num2} onChange={handleNum2Change} placeholder='Input 2nd number' />
      
      <button onClick={handleAdd}>Add +</button>
      <button onClick={handleSubtract}>Subtract -</button>
      <button onClick={handleMultiply}>Multiply *</button>
      <button onClick={handleDivide}>Divide /</button>
      
      <div className="result">
        <p>Result:</p>
          <h1>{result}</h1>
      </div>

    </div>
    </>
  );
};


export default Calc;