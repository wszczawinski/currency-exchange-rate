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
        <FavoriteCurrencies />
        <TableSelection setSelectedTable={setSelectedTable} />
        <CurrencyTable
          selectedTable={selectedTable}
          exchangeRates={exchangeRates}
          setExchangeRates={setExchangeRates}
        />
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
