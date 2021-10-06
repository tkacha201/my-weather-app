const api = {
  key: "6bb5fdb41726423e0291478e4ce45e37",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const fetchCity = async (city) => {
  return fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Your search did not execute correctly");
      }
    })
    .then((result) => {
      return result;
    });
};
