import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, setPortfolio, stocks }) {

  function handleRemoveStock(id) {
    setPortfolio(portfolio.filter(item => id !== item))
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks.filter(stock => portfolio.includes(stock.id))
        .map(stock => <Stock stock={stock} key={stock.id } clickFunction={handleRemoveStock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
