import React from 'react';
import './CurrencyTable.css';

export function CurrencyTable({ selectedTable, exchangeRates, setExchangeRates }) {
  const handleClick = currency => {
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
          return (
            <button
              className={`singleCurrency ${rate.favorite}`}
              onClick={() => handleClick(rate)}
              key={rate.code}
            >
              <div>{rate.code}</div>
              <div>{rate.currency}</div>
              <div>
                <p>{rate.bid}</p>
                <p>{rate.ask}</p>
                <p>{rate.mid}</p>
              </div>
            </button>
          );
        })}
    </section>
  );
}
