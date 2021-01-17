import React from 'react';
import { render } from '@testing-library/react';
import { FavoriteCurrencies } from './FavoriteCurrencies';

describe('Favorite section', () => {
  test('renders correctly', () => {
    let favoriteCodes = [];
    const { getByText } = render(
      <FavoriteCurrencies favoriteCodes={favoriteCodes}></FavoriteCurrencies>
    );

    expect(getByText('Favorite Currencies')).toBeInTheDocument();
  });

  test('renders remove button', () => {
    let favoriteCodes = ['USD'];
    const { getByText } = render(
      <FavoriteCurrencies favoriteCodes={favoriteCodes}></FavoriteCurrencies>
    );

    expect(getByText('Favorite Currencies')).toBeInTheDocument();
    expect(getByText('Remove all')).toBeInTheDocument();
  });
});
