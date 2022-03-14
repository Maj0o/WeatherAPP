const mainDiv = document.getElementById("root");

let cityName = `Groningen`;

const API_KEY = `064f8543c0055ed385d8ed5634c95ac9`;
// const GET_WEATHER = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
const CITY_COORDINATES = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

const fetchData = async () => {
  const fetchCityCoordinates = await fetch(`${CITY_COORDINATES}`);
  const resolveLocation = await fetchCityCoordinates.json();
  resolveLocation.forEach((data) => {
    JSON.stringify(`${data.name} ${data.state} ${data.lon} ${data.lat}`);
  });
  console.table(resolveLocation);
};

fetchData();
