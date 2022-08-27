/* Key que se obtuvo de openweather */
const API_KEY = "bac5553435386e4b702ac7fc0fd6d11b";

/* Latitud y longitud de Ciudad cultural */
let lat = "-24.1834177";
let lon = "-65.3312979";

async function getWeather() {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    let weatherResponse = await response.json();
    console.log(weatherResponse);

    /* Rellenar los objetos html con los datos obtenidos */
    document.getElementById("location").innerText = weatherResponse.name;
    document.getElementById(
      "icon"
    ).src = `http://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`;
    document.getElementById(
      "temp"
    ).innerText = `${weatherResponse.main.temp} °C`;

    //Opcional
    /* document.getElementById("description").innerText =
      weatherResponse.weather[0].main; */

    document.getElementById(
      "feels_like"
    ).innerText = `Sensación termica: ${weatherResponse.main.feels_like} °C`;
    document.getElementById(
      "temp_max"
    ).innerText = `Maxima: ${weatherResponse.main.temp_max} °C`;
    document.getElementById(
      "temp_min"
    ).innerText = `Minima: ${weatherResponse.main.temp_min} °C`;
    document.getElementById(
      "humidity"
    ).innerText = `Humedad: ${weatherResponse.main.humidity} %`;

    //Opcional
    /* document.getElementById("date").innerText = getDate(); */

    console.log(weatherData);
  } catch (error) {
    console.log("Ocurrio un error");
  }
}

/* Obtener la fecha - Opcional*/
const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

getWeather();
