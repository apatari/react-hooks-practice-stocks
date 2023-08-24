import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [portfolio, setPortfolio] = useState([])
  const [stocks, setStocks] = useState([])
  const [filterBy, setFilterBy] = useState("All")


  return (
    <div>
      <SearchBar setStocks={setStocks} stocks={stocks} setFilterBy={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer filterBy={filterBy} stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio} stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
