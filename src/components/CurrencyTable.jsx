import React from 'react';
import SingleCurrency from './SingleCurrency';

import './CurrencyTable.css';

export function CurrencyTable({ exchangeRates, handleClick, favoriteCodes }) {
  return (
    <section className="currencyTable">
      <div className="singleCurrency tableDescription">
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
          return favoriteCodes.includes(rate.code) ? (
            <SingleCurrency rate={rate} handleClick={handleClick} favorite={true} />
          ) : (
            <SingleCurrency rate={rate} handleClick={handleClick} favorite={false} />
          );
        })}
    </section>
  );
}
