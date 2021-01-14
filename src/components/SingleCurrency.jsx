import React from 'react';

export default function SingleCurrency({ rate, handleClick }) {
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
}
