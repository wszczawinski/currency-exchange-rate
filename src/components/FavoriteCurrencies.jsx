import React from 'react';
import SingleCurrency from './SingleCurrency';

import styles from './FavoriteCurrencies.module.css';

export function FavoriteCurrencies({
  exchangeRates,
  handleClick,
  favoriteCodes,
  removeAllFavorites,
}) {
  return (
    <section className={styles.favoriteSection}>
      <h3 className={styles.title}>Favorite Currencies</h3>
      {favoriteCodes.length ? (
        ''
      ) : (
        <p className={styles.information}>
          💡Add your favorite currencies by clicking on the list below. <br/>
          ⚡Then click again to remove from favorites.
        </p>
      )}

      {typeof exchangeRates === 'object' &&
        Array.from(exchangeRates).map(rate => {
          return (
            favoriteCodes.includes(rate.code) && (
              <SingleCurrency rate={rate} handleClick={handleClick} favorite={true} />
            )
          );
        })}

      {favoriteCodes.length > 0 && (
        <button onClick={removeAllFavorites} className={styles.removebtn}>
          Remove all
        </button>
      )}
    </section>
  );
}
