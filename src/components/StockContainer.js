import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer( { stocks, setStocks, portfolio, setPortfolio }) {

  function handleAddStock(id) {
    if (!portfolio.includes(id)) {
      setPortfolio([
        ...portfolio, id
      ])
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stocks => setStocks(stocks))
  }, [])

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return <Stock key={stock.id} stock={stock} clickFunction={handleAddStock} />
      })}
    </div>
  );
}

export default StockContainer;
