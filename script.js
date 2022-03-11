const mainDiv = document.getElementById("root");

let cityName = `Texas`;
const API_KEY = `appid=064f8543c0055ed385d8ed5634c95ac9`;
const CITY_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&${API_KEY}`;

function geoCoordinates() {
  const dataPromise = fetch(`${CITY_URL}`)
    .then((response) => response.json())
    .then((geoData) => console.table(geoData));
}

// function resolveGeoCoordinates() {

//   api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&${API_KEY}
// }

geoCoordinates();
