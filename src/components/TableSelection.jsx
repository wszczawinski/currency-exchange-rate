import React, { useState } from 'react';
import './TableSelection.css';

export function TableSelection({ selectedTable, setSelectedTable }) {
  const [activeButton, setActiveButton] = useState(['', '', '']);

  const handleClick = select => {
    let table = ['A', 'B', 'C'];
    let active = ['', '', ''];
    active[select] = 'activeButton';

    setSelectedTable(table[select]);
    setActiveButton(active);
  };

  return (
    <div>
      <button
        className={`selectButton ${activeButton[0]}`}
        onClick={() => handleClick(0)}
      >
        A
      </button>
      <button
        className={`selectButton ${activeButton[1]}`}
        onClick={() => handleClick(1)}
      >
        B
      </button>
      <button
        className={`selectButton ${activeButton[2]}`}
        onClick={() => handleClick(2)}
      >
        C
      </button>
    </div>
  );
}
