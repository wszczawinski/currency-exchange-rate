import React from 'react';
import SingleCurrency from './SingleCurrency';

import './FavoriteCurrencies.css';

export function FavoriteCurrencies({
  exchangeRates,
  handleClick,
  favoriteCodes,
  removeAllFavorites,
}) {
  return (
    <section className={'favoriteSection'}>
      <h3 className={'title'}>Favorite Currencies</h3>
      {favoriteCodes.length >= 1 ? (
        ''
      ) : (
        <p className={'information'}>
          💡Add your favorite currencies by clicking on the list below. <br />
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
        <button onClick={removeAllFavorites} className={'removebtn'}>
          Remove all
        </button>
      )}
    </section>
  );
}
