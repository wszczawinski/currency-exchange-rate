import React, { useState, useEffect } from 'react';
import { loadTable } from '../services/loadTable';
import { fetchRates } from '../services/fetchRates';

export function CurrencyTable({ selectedTable }) {
  const [exchangeRates, setExchangeRates] = useState('Loading...');

  useEffect(() => {
    let rates = loadTable(selectedTable)
      ? loadTable(selectedTable)
      : fetchRates(selectedTable);

    setExchangeRates(rates);
  }, [selectedTable]);

  return (
    <div>
      {typeof exchangeRates == 'string' ? <h3>{exchangeRates}</h3> : <p>rates table</p>}
    </div>
  );
}
