const mainDiv = document.getElementById("root");
const search = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");

let cityName = `Preetz`;
const API_KEY = `&appid=de4bd711217b7da44ed7480704925a3b`;

const fetchData = async () => {
  const fetchRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${API_KEY}`
  );
  let data = await fetchRequest.json();
  return data;
};

fetchData().then((data) => {
  console.log(data);
});

console.log(fetchData());
