import React from 'react';

export function TableSelection({ selectedTable, setSelectedTable }) {
  const handleClick = select => {
    setSelectedTable(select);
  };
  
  return (
    <div>
      <button onClick={() => handleClick('A')}>A</button>
      <button onClick={() => handleClick('B')}>B</button>
      <button onClick={() => handleClick('C')}>C</button>
    </div>
  );
}
