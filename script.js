const mainDiv = document.getElementById("root");
const search = document.getElementById("search");
const tempContainer = document.querySelector(".temp");
const humidityContainer = document.querySelector(".humidity");
const weatherDescriptionContainer = document.querySelector(
  ".weatherdescription"
);
const weatherConditionContainer = document.querySelector(".weathercondition");
const cityNameContainer = document.querySelector(".name");

let cityName = `Preetz`;
const API_KEY = `&appid=de4bd711217b7da44ed7480704925a3b`;

const fetchData = async () => {
  const fetchRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${API_KEY}&units=metric`
  );
  let data = await fetchRequest.json();

  return data;
};

fetchData().then((data) => {
  let temp = `Temperature: ${data.main.temp}`;
  let humidity = `Humidity: ${data.main.humidity}`;
  let weatherCondition = `Weather: ${data.weather[0].main}`;
  let weather_description = `Description: ${data.weather[0].description}`;
  data.name = cityName;

  cityNameContainer.append(cityName)
  tempContainer.append(temp);
  humidityContainer.append(humidity);
  weatherDescriptionContainer.append(weather_description);
  weatherConditionContainer.append(weatherCondition);

  console.log(data);
});

console.table(fetchData());
