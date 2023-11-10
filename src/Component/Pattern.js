import React, { useState } from 'react';
import './Pattern.css';

const Pattern = () => {
  const [rows, setRows] = useState();
  const [pattern, setPattern] = useState('');

  const generatePattern = () => {
    let result = '';
  
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += `FORMULAQSOLUTIONS`[k - 1];
      }
      result += pattern + '\n';
    }
  
    for (let i = rows - 1; i >= 1; i--) {
      let pattern = '';
      for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= i * 2 - 1; k++) {
        pattern += `FORMULAQSOLUTIONS`[k - 1];
      }
      result += pattern + '\n';
    }
  
    setPattern(result);
  };
  
  return (
    <div className='pattern-div'>
      <h1>Pattern Generator</h1>
      <label>Number of Lines:</label>
      <input
        className='pattern-input'
        type="number"
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value, 10))}
        placeholder='Number Of Lines'
      />
      <button className='display-button' onClick={generatePattern}>Display</button>
      <pre>{pattern}</pre>
    </div>
  );
};

export default Pattern;
