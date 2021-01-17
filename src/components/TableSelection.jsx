import React, { useState } from 'react';
import './TableSelection.css';

export function TableSelection({ setSelectedTable }) {
  const [activeButton, setActiveButton] = useState(['activeButton', '', '']);

  const handleClick = select => {
    let table = ['C', 'A', 'B'];
    let active = ['', '', ''];
    active[select] = 'activeButton';

    setSelectedTable(table[select]);
    setActiveButton(active);
  };

  return (
    <section>
      <h3>Select table</h3>
      <button
        className={`selectButton ${activeButton[0]}`}
        onClick={() => handleClick(0)}
      >
        Short
      </button>
      <button
        className={`selectButton ${activeButton[1]}`}
        onClick={() => handleClick(1)}
      >
        Medium
      </button>
      <button
        className={`selectButton ${activeButton[2]}`}
        onClick={() => handleClick(2)}
      >
        Long
      </button>
    </section>
  );
}
