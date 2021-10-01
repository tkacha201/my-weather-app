import CityCard from "./CityCard";

const CityCardList = ({ cities }) => {
  return (
    <div className="weather-wrapper">
      {cities.map(
        (city) => (
          // console.log(city)
          <CityCard
            text={city.result.name}
            key={city.id}
            weather={Math.round(city.result.main.temp)}
          />
        )
        // <CityCard
        //   text={city.text}
        //   weather={Math.round(city.main.temp)}
        //   key={city.id}
        // />
      )}
    </div>
  );
};

export default CityCardList;
