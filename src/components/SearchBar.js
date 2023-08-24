import React from "react";

function SearchBar( { setStocks, stocks, setFilterBy }) {

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }
  
  
  function handleSortChange(e) {
    console.log(e.target.value)
    
    setStocks(stocks.sort((a, b) => {
      
      if (e.target.value === "Alphabetically") {
        if (a.name < b.name) { return -1}
        if (a.name > b.name) { return 1}
        return 0
      }
      if (e.target.value === "Price") {
        if (a.price < b.price) { return -1}
        if (a.price > b.price) { return 1}
        return 0
      }
      

    }).slice())
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
