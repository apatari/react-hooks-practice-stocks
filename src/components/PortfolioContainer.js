import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, setPortfolio, stocks }) {

  function handleRemoveStock(id) {
    setPortfolio(portfolio.filter(item => id !== item))
  }

  function compareFn(a,b) {
    if (a.id < b.id) {return -1}
    if (a.id > b.id) { return 1}
    return 0

  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks.filter(stock => portfolio.includes(stock.id)).sort(compareFn)
        .map(stock => <Stock stock={stock} key={stock.id } clickFunction={handleRemoveStock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
