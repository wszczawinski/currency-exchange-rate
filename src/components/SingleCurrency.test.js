import React from 'react';
import { render } from '@testing-library/react';
import SingleCurrency from './SingleCurrency';

describe('Single currency', () => {
  test('renders correctly', () => {
    let rate = { currency: 'dolar amerykański', code: 'USD', mid: 3.7466 };
    const { container } = render(<SingleCurrency rate={rate} />);

    expect(container.firstChild).toHaveClass('singleCurrency');
  });
});
