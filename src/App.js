import React, { useState } from "react";
import "./components/App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CityCardList from "./components/CityCardList";
import { useEffect } from "react";
import { fetchCity } from "./utils/ApiUtils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Configure alerts
toast.configure();

function App() {
  const [cities, setCities] = useState([]);
  const citiesPre = ["Plovdiv", "Sofia", "Madrid", "London", "Tokyo"];

  const notify = (notifType) => {
    if (notifType === "city exists") {
      toast.info("City already displayed", { autoClose: 3000 });
    } else if (notifType === "city deleted") {
      toast.warning("City was deleted", { autoClose: 3000 });
    } else {
      toast.error("Your search did not execute correctly", { autoClose: 3000 });
    }
  };

  useEffect(() => {
    const json = localStorage.getItem("cities");
    const savedCities = JSON.parse(json);
    if (!savedCities || !savedCities.length) {
      citiesPre.map((city) => addCity(city));
    } else {
      // setCities(savedCities);
      savedCities.map((city) => addCity(city.name));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const json = JSON.stringify(cities);
    localStorage.setItem("cities", json);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addCity = (city) => {
    //check if duplicate city (filter)

    if (
      cities.filter((c) => c.name.toLowerCase() === city.toLowerCase())
        .length === 0
    ) {
      fetchCity(city)
        .then((data) => {
          const newCity = {
            id: Math.random() * 1000,
            name: data.name,
            temp: data.main.temp,
            weather: data.weather[0].description,
            wind: data.wind.speed,
          };
          setCities((cities) => [...cities, newCity]);
        })
        .catch(() => notify("error"));
    } else {
      // alert("city already present");
      notify("city exists");
    }
  };

  const deleteCity = (name) => {
    const deleteCity = cities.filter((city) => city.name !== name);
    setCities(deleteCity);
    notify("city deleted");
  };

  return (
    <div className="App">
      <Header />
      <div className="label">Check the weather today</div>
      <SearchBar onSearchCity={addCity} />
      <CityCardList cities={cities} onDelete={deleteCity} />
    </div>
  );
}

export default App;
