import React from 'react';
import { render } from '@testing-library/react';
import { CurrencyTable } from './CurrencyTable';

describe('Currency table', () => {
  test('renders correctly', () => {
    const { getByText } = render(<CurrencyTable></CurrencyTable>);

    expect(getByText('Code')).toBeInTheDocument();
    expect(getByText('Price')).toBeInTheDocument();
  });
});
