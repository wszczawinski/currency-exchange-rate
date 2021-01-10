import React, { useState } from 'react';
import { CurrencyTable, FavoriteCurrencies, TableSelection } from './components';

import styles from './App.module.css';

function App() {
  const [selectedTable, setSelectedTable] = useState('A');

  if (!navigator.onLine) {
    return (
      <h1 className={styles.error}>
        Oh! You're no longer online, did you disconnect your internet? :( <br />
        Try reconnecting and refresh then the page.
      </h1>
    );
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>Currency exchange rates</h1>
      </header>
      <main>
        <FavoriteCurrencies />
        <TableSelection
          selectedTable={selectedTable}
          setSelectedTable={setSelectedTable}
        />
        <CurrencyTable selectedTable={selectedTable} />
      </main>
      <footer>
        <p>&copy; w.szczawinski</p>
      </footer>
    </div>
  );
}

export default App;
