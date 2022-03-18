const mainDiv = document.getElementById("root");
const search = document.getElementById("search");
const countryContainer = document.querySelector(".country");
const tempContainer = document.querySelector(".temp");
const humidityContainer = document.querySelector(".humidity");
const weatherDescriptionContainer =document.querySelector(".weatherdescription");

let cityName = `Preetz`;
const API_KEY = `&appid=de4bd711217b7da44ed7480704925a3b`;

const fetchData = async () => {
  const fetchRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${API_KEY}&units=metric`
  );
  let data = await fetchRequest.json();

  // let temp = data.main.temp;
  // let country = data.sys.country;
  // let humidity = data.main.humidity;
  // let temp_min = data.main.temp_min;
  // let temp_max = data.main.temp_max;
  // let weatherDescription = data.weather[0].description;
  // let weatherCondition = data.weather[0].main;
  // data.name = cityName;

  return data;
};

fetchData().then((data) => {
  let temp = `Temperature ${data.main.temp}`;
  let country = data.sys.country;
  let humidity = `Humidity ${data.main.humidity}`;
  let temp_min = data.main.temp_min;
  let temp_max = data.main.temp_max;
  let weather_description = `Weather condition: ${data.weather[0].description}`;
  let weatherCondition = data.weather[0].main;
  data.name = cityName;

  countryContainer.append(country)
  tempContainer.append(temp)
  humidityContainer.append(humidity)
  weatherDescriptionContainer.append(weather_description)
  console.log(data);
});


console.table(fetchData());
