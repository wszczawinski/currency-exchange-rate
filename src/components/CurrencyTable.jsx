import React, { useState, useEffect } from 'react';
import { loadTable } from '../services/loadTable';
import { fetchRates } from '../services/fetchRates';

import styles from './CurrencyTable.module.css';

export function CurrencyTable({ selectedTable, favoriteList, setFavoriteList }) {
  const [exchangeRates, setExchangeRates] = useState('Loading...');

  useEffect(() => {
    loadTable(selectedTable)
      ? setExchangeRates(loadTable(selectedTable))
      : fetchRates({ selectedTable, setExchangeRates });
  }, [selectedTable]);

  const handleClick = currencyCode => {
    let currencyList = favoriteList;
    let clickedCurrency = { code: currencyCode, table: selectedTable };

    if (currencyList.some(item => item.code === currencyCode)) {
      currencyList = currencyList.filter(item => item.code !== currencyCode);
    } else {
      currencyList.push(clickedCurrency);
    }
    console.table(currencyList);
    setFavoriteList(currencyList);
  };

  return (
    <section className={styles.currencyTable}>
      <div className={`${styles.singleCurrency} ${styles.tableDescription}`}>
        <p>Code</p>
        <p>Name</p>
        <div>
          <p>Price</p>
          <p>(PLN)</p>
        </div>
      </div>
      {typeof exchangeRates === 'string' && <h3>{exchangeRates}</h3>}

      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            <button
              className={styles.singleCurrency}
              onClick={() => handleClick(rate.code)}
              key={rate.code}
            >
              <div>{rate.code}</div>
              <div>{rate.currency}</div>
              <div>
                <p>{rate.bid}</p>
                <p>{rate.ask}</p>
                <p>{rate.mid}</p>
              </div>
            </button>
          );
        })}
    </section>
  );
}
