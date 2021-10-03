import React, { useState } from 'react';
import './components/App.css';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CityCardList from "./components/CityCardList"
// import { fetchCity } from "./utils/ApiUtils";


function App() {

  const [inputText, setInputText] = useState("");
  const [cities, setCities] = useState([]);

  const citiesPre = ["Plovdiv", "Sofia", "Madrid", "London", "Tokyo"];

  if (localStorage.getItem("citiesInLocal")) {
    let localCityString = localStorage.getItem("citiesInLocal");
    let localCityArray = localCityString.split(",")
    let uniqueLocalCityArray = [...new Set(localCityArray)]
    uniqueLocalCityArray.forEach(cityString => {
      //remove duplicates here
      console.log(cityString)
    })
  } else {
    localStorage.setItem("citiesInLocal",citiesPre)

    // cititesPre.forEach((localCity) => {
    //   fetchCity(localCity).then((result) => {
    //     setCities([...cities, { id: Math.random() * 1000, result }]);
    //     console.log("setCities", setCities);
    //     // localStorage.setItem("citiesInLocal", ...setCities);
    //   });
    // });
    // });
  }

  return (
    <div className="App">
      <Header />
  <div className="label">Check the weather today</div>
      <SearchBar 
      inputText={inputText} 
      cities={cities} 
      setCities={setCities} 
      setInputCity={setInputText}/>
      <CityCardList cities={cities}/>

    </div>

  );
}

export default App;
