import React from 'react';
import { render } from '@testing-library/react';
import { TableSelection } from './TableSelection';

describe('Table selection', () => {
  test('renders correctly', () => {
    const { getByText } = render(<TableSelection></TableSelection>);

    expect(getByText('Select table')).toBeInTheDocument();
  });
});
