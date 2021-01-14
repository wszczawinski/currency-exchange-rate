import React from 'react';
import SingleCurrency from './SingleCurrency';

import styles from './FavoriteCurrencies.module.css';

export function FavoriteCurrencies({ exchangeRates, handleClick }) {
  return (
    <div>
      <h3 className={styles.title}>Favorite Currencies</h3>
      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            rate.favorite === 'favorite' && (
              <SingleCurrency rate={rate} handleClick={handleClick} />
            )
          );
        })}
    </div>
  );
}
