// IpoDetail.js
import React from 'react';
import './Dashboard.css';


const IpoDetail = ({ ipo }) => (
  <div className="ipo-card">
    <h3>{ipo.companyName}</h3>
    <p>{`Symbol: ${ipo.symbol}`}</p>
    <p>{`Price Range: ${ipo.priceRange}`}</p>
    <p>{`Expected IPO Date: ${ipo.filedDate}`}</p>
    <p>{`Expected IPO Date: ${ipo.firstDayClose}`}</p>
    <p>{`Expected IPO Date: ${ipo.lockupPeriod}`}</p>
    <p>{`Expected IPO Date: ${ipo.offeringDate}`}</p>
    <p>{`Expected IPO Date: ${ipo.priceRangeHigh}`}</p>
    <p>{`Expected IPO Date: ${ipo.priceRangelow}`}</p>
    <p>{`Expected IPO Date: ${ipo.shares}`}</p>
    <p>{`Expected IPO Date: ${ipo.status}`}</p>
    <p>{`Expected IPO Date: ${ipo.symbol}`}</p>
    <p>{`Expected IPO Date: ${ipo.volume}`}</p>
    {ipo.underwriters && (
      <p>{`Underwriters: ${ipo.underwriters.join(', ')}`}</p>
    )}
  </div>
);

export default IpoDetail;
