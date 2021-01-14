import React from 'react';
import styles from './FavoriteCurrencies.module.css';

export function FavoriteCurrencies({ exchangeRates, handleClick }) {
  return (
    <div>
      <h3 className={styles.title}>Favorite Currencies</h3>
      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            rate.favorite === 'favorite' && (
              <button
                className={`singleCurrency ${rate.favorite}`}
                key={rate.code}
                onClick={() => handleClick(rate)}
              >
                <div>{rate.code}</div>
                <div>{rate.currency}</div>
                <div>
                  <p>{rate.bid}</p>
                  <p>{rate.ask}</p>
                  <p>{rate.mid}</p>
                </div>
              </button>
            )
          );
        })}
    </div>
  );
}
