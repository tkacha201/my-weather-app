import React, { useState } from "react";
import "./components/App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CityCardList from "./components/CityCardList";
import { useEffect } from "react";
import { fetchCity } from "./utils/ApiUtils";

function App() {
  const [inputText, setInputText] = useState("");
  const [cities, setCities] = useState([]);

  const citiesPre = ["Plovdiv", "Sofia", "Madrid", "London", "Tokyo"];
  // !localStorage.getItem("citiesInLocal") &&
  //   localStorage.setItem("citiesInLocal", citiesPre);

  useEffect(() => {
    console.log("I have been mounted from App.js");
    if (localStorage.getItem("citiesInLocal") == null) {
      citiesPre.map((city) => {
        addCity(city);
      });
    } else {
      const cities = localStorage.getItem("citiesInLocal");
      citiesPre.map((city) => {
        addCity(city);
      });
    }
  }, []);

  const addCity = (city) => {
    fetchCity(city).then((data) => {
      const newCity = {
        id: Math.random() * 1000,
        name: data.name,
        temp: data.main.temp,
      };
      setCities((cities) => [...cities, newCity]);
      localStorage.setItem("citiesInLocal", JSON.stringify([cities]));
    });
  };

  // if (localStorage.getItem("citiesInLocal")) {
  //   let localCityString = localStorage.getItem("citiesInLocal");
  //   let localCityArray = localCityString.split(",")
  //   let uniqueLocalCityArray = [...new Set(localCityArray)]
  //   uniqueLocalCityArray.forEach(cityString => {
  //     //remove duplicates here
  //     console.log(cityString)
  //   })
  // } else {
  //   localStorage.setItem("citiesInLocal",citiesPre)

  // cititesPre.forEach((localCity) => {
  //   fetchCity(localCity).then((result) => {
  //     setCities([...cities, { id: Math.random() * 1000, result }]);
  //     console.log("setCities", setCities);
  //     // localStorage.setItem("citiesInLocal", ...setCities);
  //   });
  // });
  // });

  return (
    <div className="App">
      <Header />
      <div className="label">Check the weather today</div>
      <SearchBar onSearchCity={addCity} />
      <CityCardList cities={cities} />
    </div>
  );
}

export default App;
