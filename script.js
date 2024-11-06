const apiKey = "4b03f5d9f69a24dee1e0b0282e42f049";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.src = "img/clear.png";
      break;
    case "Rain":
        weatherIcon.src = "img/rain.png";
      break;
    case "Snow":
        weatherIcon.src = "img/snow.png";
      break;
    case "Clouds":
        weatherIcon.src = "img/clouds.png";
      break;
    case "Mist":
        weatherIcon.src = "img/mist.png";
      break;
    case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
      break;
    default:
        weatherIcon.src = "img/rain.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
