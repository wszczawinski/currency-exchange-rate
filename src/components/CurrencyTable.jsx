import React, { useState, useEffect } from 'react';
import { loadTable } from '../services/loadTable';
import { fetchRates } from '../services/fetchRates';

import styles from './CurrencyTable.module.css';

export function CurrencyTable({ selectedTable }) {
  const [exchangeRates, setExchangeRates] = useState('Loading...');

  useEffect(() => {
    loadTable(selectedTable)
      ? setExchangeRates(loadTable(selectedTable))
      : fetchRates({ selectedTable, setExchangeRates });
  }, [selectedTable]);

  return (
    <section className={styles.CurrencyTable}>
      {typeof exchangeRates === 'string' && <h3>{exchangeRates}</h3>}

      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            <article className={styles.singleRate}>
              <p>{rate.currency}</p>
              <p>{rate.code}</p>
              <p>{rate.bid}</p>
              <p>{rate.ask}</p>
              <p>{rate.mid}</p>
            </article>
          );
        })}
    </section>
  );
}
