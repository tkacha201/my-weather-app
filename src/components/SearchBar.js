// import { fetchCity } from "../utils/ApiUtils";
import searchIcon from '../img/search.png';
import React, { useState } from 'react';

const SearchBar = ({ setInputText, cities, setCities, inputText }) => {
  const api = {
    key: "6bb5fdb41726423e0291478e4ce45e37",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  let [cityString] = useState("");
 

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
 const handleChange = (e) => {
   e.preventDefault();
    // this.setState({cityString: e.target.value});
    cityString = e.target.value;
 };

  const inputTextHandler = (e) => {
    e.preventDefault();
    //if (e.key === "Enter") {
      //for each fetch with a wait time of 5 second
      // const cityString = handleChange();
      console.log(cityString);
      fetch(`${api.base}weather?q=${cityString}&units=metric&APPID=${api.key}`)
        .then((res) => {
          if (res.ok) {
            let localCityString = localStorage.getItem("citiesInLocal");
            const localCityArray = localCityString.split(",")
            const uniqueLocalCityArray = [...new Set(localCityArray)]
            const finalExisting = uniqueLocalCityArray.join(",")
            const data = finalExisting ? finalExisting + "," + cityString : cityString;
            localStorage.setItem("citiesInLocal", data);
            return res.json();
          } else {
            throw new Error("Your search did not execute correctly");
          }
        })
        .then((result) => {
          setCities([...cities, { id: Math.random() * 1000, result }]);
          console.log("setCities", setCities);
          inputText = "";
        })
        .catch((err) => alert(err));
    //}
  };

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
        //  onKeyPress={inputTextHandler}
        onChange={handleChange}
        id="searchQueryInput"
        type="search"
        className="search-bar"
        placeholder="Enter a city name"
      />
      <button onClick={inputTextHandler} type="submit">
      <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
