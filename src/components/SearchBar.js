// import { fetchCity } from "../utils/ApiUtils";
import React, { useState } from "react";
import { useEffect } from "react";
import searchIcon from "../img/search.png";

const SearchBar = ({ onSearchCity }) => {
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    console.log("I have been mounted");
  }, []);

  // if (localStorage.getItem("citiesInLocal")) {
  //  console.log("items found");
  //} else {
  // cititesPre.forEach((localCity) => {
  //fetchCity("London").then((result) => {
  //setCities([...cities, { id: Math.random() * 1000, result }]);
  // console.log("setCities", setCities);
  // localStorage.setItem("citiesInLocal", ...setCities);
  // });
  // });
  // });
  // }

  // const fetchCitites = (city) => {
  //   console.log(city);
  //   fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //     // .then((res) => {
  //     //   if (!res.ok) {
  //     //     throw new Error("Daki bombaki");
  //     //   }
  //     // })

  //     .then((result) => {
  //       // setCities([...cities, { id: Math.random() * 1000, result }]);
  //       console.log("result", result);
  //       // localStorage.setItem("citites1234", cities);
  //       // inputText = "";
  //     });
  // };
  // if (localStorage.getItem("citites")) {
  //   localStorage.setItem("citites", cities);
  // } else {
  //   cititesPre.forEach((city) => fetchCitites(city));
  // }

  // const submitSearchHandler = (e) => {
  //    e.preventDefault();
  //   const cityString1 = document.getElementById("searchQueryInput").target.value;
  //   console.log('d', cityString1);

  // };

  const onSearch = (e) => {
    e.preventDefault();
    onSearchCity(searchText);
    setsearchText("");
  };

  // const inputTextHandler = (e) => {
  //   e.preventDefault();
  //if (e.key === "Enter") {
  //for each fetch with a wait time of 5 second
  // const cityString = handleChange();
  // console.log(cityString);
  // fetch(`${api.base}weather?q=${cityString}&units=metric&APPID=${api.key}`)
  //   .then((res) => {
  //     if (res.ok) {
  //       let localCityString = localStorage.getItem("citiesInLocal");
  //       const localCityArray = localCityString.split(",");
  //       const uniqueLocalCityArray = [...new Set(localCityArray)];
  //       const finalExisting = uniqueLocalCityArray.join(",");
  //       const data = finalExisting
  //         ? finalExisting + "," + cityString
  //         : cityString;
  //       localStorage.setItem("citiesInLocal", data);
  //       return res.json();
  //     } else {
  //       throw new Error("Your search did not execute correctly");
  //     }
  //   })
  //   .then((result) => {
  //     setCities([...cities, { id: Math.random() * 1000, result }]);
  //     console.log("setCities", setCities);
  //     inputText = "";
  //   })
  //   .catch((err) => alert(err));
  //}
  // };

  //OLD working function
  // const inputTextHandler = (e) => {
  //   if (e.key === "Enter") {
  //     setInputText = e.target.value;
  //     setCities([
  //       ...cities,
  //       { text: setInputText, weather: "66C", id: Math.random() * 1000 },
  //     ]);
  //   }
  //   setInputText = "";
  // };

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
