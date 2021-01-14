import React, { useState, useEffect } from 'react';
import { CurrencyTable, FavoriteCurrencies, TableSelection } from './components';
import { loadTable } from './services/loadTable';
import { fetchRates } from './services/fetchRates';

import styles from './App.module.css';

function App() {
  const [selectedTable, setSelectedTable] = useState('A');
  const [exchangeRates, setExchangeRates] = useState('Loading...');

  useEffect(() => {
    loadTable(selectedTable)
      ? setExchangeRates(loadTable(selectedTable))
      : fetchRates({ selectedTable, setExchangeRates });
  }, [selectedTable]);

  const addRemoveFavorite = currency => {
    let rates = exchangeRates;

    if (rates.some(item => item.code === currency.code && item.favorite === 'favorite')) {
      rates = rates.map(rate => {
        if (rate.code === currency.code) rate.favorite = '';
        return rate;
      });
    } else {
      rates = rates.map(rate => {
        if (rate.code === currency.code) rate.favorite = 'favorite';
        return rate;
      });
    }

    setExchangeRates(rates);
    localStorage.setItem(`${selectedTable}table`, JSON.stringify(rates));
  };

  if (!navigator.onLine) {
    return (
      <h1 className={styles.error}>
        Oh! You're no longer online, did you disconnect your internet? 😥 <br />
        Try reconnecting and refresh then the page.
      </h1>
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Currency exchange rates</h1>
        <p>
          This app will help you being up to date with exchange rates. You can display one
          of three available tables and add currencies to favorite.
        </p>
      </header>
      <main>
        <FavoriteCurrencies
          handleClick={addRemoveFavorite}
          exchangeRates={exchangeRates}
        />
        <TableSelection setSelectedTable={setSelectedTable} />
        <CurrencyTable handleClick={addRemoveFavorite} exchangeRates={exchangeRates} />
      </main>
      <footer>
        <p>
          <a href="https://github.com/wszczawinski" target="blank">
            &copy; w.szczawinski
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
