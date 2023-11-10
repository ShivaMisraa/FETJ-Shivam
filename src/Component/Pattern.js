import React, { useState } from 'react';
import './Pattern.css';

const Pattern = () => {
  const [rows, setRows] = useState(5);
  const [pattern, setPattern] = useState('');

  const generatePattern = () => {
    let result = '';
    const maxLines = 6;
    const lines = rows > maxLines ? maxLines : rows;

    for (let i = 1; i <= lines; i++) {
      let pattern = '';
      for (let j = 1; j <= lines - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += `FORMULAQSOLUTIONS`[k - 1];
      }
      result += pattern + '\n';
    }

    for (let i = lines - 1; i >= 1; i--) {
      let pattern = '';
      for (let j = 1; j <= lines - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
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
