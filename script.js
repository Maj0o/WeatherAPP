const mainDiv = document.getElementById("root");

let cityName = `Ottawa`;
const API_KEY = `appid=064f8543c0055ed385d8ed5634c95ac9`;
const CITY_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&${API_KEY}`;

const retrieveData = async () => {
  try {
    const fetchPromise = await fetch(`${CITY_URL}`);
    const weatherData = await fetchPromise.json();
    console.log(weatherData);
  } catch (error) {
    console.error(`Could not retrieve data ${error}`);
  }
};

retrieveData();

