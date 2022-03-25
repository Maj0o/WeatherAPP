const mainDiv = document.getElementById("root");
const search = document.getElementById("search");
const tempContainer = document.querySelector(".temp");
const humidityContainer = document.querySelector(".humidity");
const weatherDescriptionContainer = document.querySelector(
  ".weatherdescription"
);
const weatherConditionContainer = document.querySelector(".weathercondition");
const locationName = document.querySelector(".citynamecontainer");
const btn = document.querySelector("#submit");
const group = document.querySelector(".group");
const API_KEY = `&appid=de4bd711217b7da44ed7480704925a3b`;
let cityName = `Copenhagen`;

btn.addEventListener("click", () => {
  cityName = search.value;
  appendData();
});

const fetchData = async () => {
  const fetchRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${API_KEY}&units=metric`
  );
  let data = await fetchRequest.json();
  return data;
};

const appendData = () => {
  fetchData().then((data) => {
    tempContainer.textContent = `Temperature: ${data.main.temp}c`;
    humidityContainer.textContent = `Humidity: ${data.main.humidity}%`;
    weatherConditionContainer.textContent = `Weather: ${data.weather[0].main}`;
    weatherDescriptionContainer.textContent = `Description: ${data.weather[0].description}`;
    locationName.textContent = `${data.name}`;
  });
};
