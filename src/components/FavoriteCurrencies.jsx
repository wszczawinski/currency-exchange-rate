import React from 'react';
import SingleCurrency from './SingleCurrency';

import styles from './FavoriteCurrencies.module.css';

export function FavoriteCurrencies({ exchangeRates, handleClick, favoriteCodes }) {
  return (
    <div>
      <h3 className={styles.title}>Favorite Currencies</h3>
      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            favoriteCodes.includes(rate.code) && (
              <SingleCurrency rate={rate} handleClick={handleClick} favorite={true} />
            )
          );
        })}
    </div>
  );
}
