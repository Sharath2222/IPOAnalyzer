// CurrencyExchange.test.js
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import CurrencyExchange from './CurrencyExchange';

jest.mock('axios');

describe('CurrencyExchange Component', () => {
  it('renders the component with exchange rates', async () => {
    const mockExchangeRates = [
      { symbol: 'USDCAD', rate: 1.25 },
      { symbol: 'GBPUSD', rate: 1.4 },
      { symbol: 'USDJPY', rate: 110.5 },
    ];

    axios.get.mockResolvedValue({ data: mockExchangeRates });

    render(<CurrencyExchange />);

    // Wait for the component to fetch data
    await waitFor(() => {
      expect(screen.getByText('Currency Exchange Rates')).toBeInTheDocument();
    });

    // Check if each exchange rate is rendered
    mockExchangeRates.forEach((rate) => {
      expect(screen.getByText(`${rate.symbol}: ${rate.rate}`)).toBeInTheDocument();
    });
  });

  it('handles error when fetching exchange rates', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch exchange rates'));

    render(<CurrencyExchange />);

    // Wait for the component to handle the error
    await waitFor(() => {
      expect(screen.getByText('Error fetching exchange rates:')).toBeInTheDocument();
    });
  });
});
