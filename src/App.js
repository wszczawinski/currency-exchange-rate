import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { CurrencyTable, FavoriteCurrencies, TableSelection } from './components';
import { loadTable } from './services/loadTable';
import { fetchRates } from './services/fetchRates';

import styles from './App.module.css';

function App() {
  const [selectedTable, setSelectedTable] = useState('C');
  const [exchangeRates, setExchangeRates] = useState('Loading...');
  const [favoriteCodes, setFavoriteCodes] = useState(
    JSON.parse(localStorage.getItem(`${selectedTable}favorites`)) || []
  );

  useEffect(() => {
    loadTable(selectedTable)
      ? setExchangeRates(loadTable(selectedTable))
      : fetchRates({ selectedTable, setExchangeRates });
    setFavoriteCodes(JSON.parse(localStorage.getItem(`${selectedTable}favorites`)) || []);
  }, [selectedTable]);

  const handleFavorite = async currency => {
    let newFavorite = [...favoriteCodes];

    if (newFavorite.includes(currency.code)) {
      confirmAlert({
        title: 'Confirm removing',
        message: `Are you sure you want to remove ${currency.code} from favorites?`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => removeFavorite(newFavorite, currency.code),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    } else {
      newFavorite.push(currency.code);
      setFavoriteCodes(newFavorite);
      localStorage.setItem(`${selectedTable}favorites`, JSON.stringify(newFavorite));
    }
  };

  const removeFavorite = async (newFavorite, code) => {
    newFavorite = await newFavorite.filter(favorite => {
      return favorite !== code;
    });
    setFavoriteCodes(newFavorite);
    localStorage.setItem(`${selectedTable}favorites`, JSON.stringify(newFavorite));
  };

  const removeAllFavorites = () => {
    confirmAlert({
      title: 'Confirm removing',
      message: `Are you sure you want to remove everything from favorites?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setFavoriteCodes([]);
            localStorage.setItem(`${selectedTable}favorites`, JSON.stringify([]));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
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
          handleClick={handleFavorite}
          exchangeRates={exchangeRates}
          favoriteCodes={favoriteCodes}
          removeAllFavorites={removeAllFavorites}
        />
        <TableSelection setSelectedTable={setSelectedTable} />
        <CurrencyTable
          handleClick={handleFavorite}
          exchangeRates={exchangeRates}
          favoriteCodes={favoriteCodes}
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
