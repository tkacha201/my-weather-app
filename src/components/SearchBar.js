// import { fetchCity } from "../utils/ApiUtils";
import React, { useState } from "react";
import searchIcon from "../img/search.png";
const SearchBar = ({ onSearchCity }) => {
  const [searchText, setsearchText] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    onSearchCity(searchText);
    setsearchText("");
  };

  return (
    <div className="searchBar">
      <input
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
        id="searchQueryInput"
        type="search"
        className="search-bar"
        placeholder="Enter a city name"
      />

      <button onClick={onSearch} type="button">
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
