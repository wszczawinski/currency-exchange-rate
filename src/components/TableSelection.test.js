import React from 'react';
import { render } from '@testing-library/react';
import { TableSelection } from './TableSelection';

describe('Table selection', () => {
  test('renders correctly', () => {
    const { getByText } = render(<TableSelection></TableSelection>);

    expect(getByText('Select table')).toBeInTheDocument();
  });
  test('has one active button', async () => {
    const { getByTestId } = render(<TableSelection></TableSelection>);
    const activeButton = getByTestId('activeButton');
    expect(activeButton.className).toEqual('selectButton activeButton');
  });
});
