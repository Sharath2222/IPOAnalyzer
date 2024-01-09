// components/Dashboard/CurrencyExchange.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyExchange = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const IEX_CLOUD_API_KEY = 'pk_87a6ca04cd2d4e00b0b081d341197ea1';
    const exchangeApiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`;

    const fetchExchangeRates = async () => {
      try {
        const exchangeResponse = await axios.get(exchangeApiUrl);
        setExchangeRates(exchangeResponse.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className="currency-exchange-container">
      <h2>Currency Exchange Rates</h2>
      <div className="exchange-rates">
        {exchangeRates.map((rate) => (
          <div key={rate.symbol} className="exchange-rate">
            <p>{`${rate.symbol}: ${rate.rate}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyExchange;
