const mainDiv = document.getElementById("root");

let cityName = `Texas`;

const API_KEY = `064f8543c0055ed385d8ed5634c95ac9`;
// const GET_WEATHER = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
const CITY_COORDINATES = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

const fetchData = async () => {
  const fetchPromise = await fetch(`${CITY_COORDINATES}`);
  const resolveData = await fetchPromise.json();
  return resolveData;
};
fetchData().then(console.log);

fetchData();
