import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [portfolio, setPortfolio] = useState([1, 2, 4])
  const [stocks, setStocks] = useState([])


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio} stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
