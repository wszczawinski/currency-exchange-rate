import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SingleCurrency from './SingleCurrency';

const mockHandleClick = jest.fn();

describe('Single currency', () => {
  test('renders correctly', () => {
    let rate = { currency: 'dolar amerykański', code: 'USD', mid: 3.7466 };
    const { container } = render(<SingleCurrency rate={rate} />);

    expect(container.firstChild).toHaveClass('singleCurrency');
  });
  test('clicks button', async () => {
    let rate = { currency: 'dolar amerykański', code: 'USD', mid: 3.7466 };
    const { findByText } = render(
      <SingleCurrency rate={rate} handleClick={mockHandleClick} />
    );

    const button = await findByText('USD');
    fireEvent.click(button);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});
