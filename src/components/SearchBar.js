import { fetchCity } from "../utils/ApiUtils";

const SearchBar = ({ setInputText, cities, setCities, inputText }) => {
  const api = {
    key: "6bb5fdb41726423e0291478e4ce45e37",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const cititesPre = ["Plovdiv", "Sofia", "Madrid", "London", "Tokyo"];

  if (localStorage.getItem("citiesInLocal")) {
    console.log("items found");
  } else {
    // cititesPre.forEach((localCity) => {
    fetchCity("London").then((result) => {
      setCities([...cities, { id: Math.random() * 1000, result }]);
      console.log("setCities", setCities);
      // localStorage.setItem("citiesInLocal", ...setCities);
    });
    // });
    // });
  }

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

  const inputTextHandler = (e) => {
    if (e.key === "Enter") {
      //   setInputText = e.target.value;
      //   fetch(
      //     `${api.base}weather?q=${e.target.value}&units=metric&APPID=${api.key}`
      //   )
      //     .then((res) => {
      //       if (res.ok) {
      //         return res.json();
      //       } else {
      //         throw new Error("Your search did not execute correctly");
      //       }
      //     })
      //     .then((result) => {
      //       setCities([...cities, { id: Math.random() * 1000, result }]);
      //       console.log("setCities", setCities);
      //       inputText = "";
      //     })
      //     .catch((err) => alert(err));
    }
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
        onKeyPress={inputTextHandler}
        id="searchQueryInput"
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
