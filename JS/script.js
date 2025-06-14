// Variaveis e seleção de elementos
const weatherKey = WEATHER_KEY;

const cityInput = document.querySelector("#cidade-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const tempMin = document.querySelector("#min-temperature span")
const tempMax = document.querySelector("#max-temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

// Funções
const getCityPhoto = async (city) => {
    const photoKey = PHOTO_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${photoKey}&orientation=landscape&per_page=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.results[0].urls.regular;
  } catch (error) {
    console.error("Erro ao buscar imagem da cidade:", error);
    return null;
  }
};

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&lang=pt_br&units=metric`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    // console.log(data);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    tempMin.innerText = parseInt(data.main.temp_min)
    tempMax.innerText = parseInt(data.main.temp_max)
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src",`https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}Km/h`;
    
    weatherContainer.classList.remove("hide");
};

const showCityPhoto = async (city) => {
  const photoUrl = await getCityPhoto(city);
  if (photoUrl) {
    document.body.style.backgroundImage = `url(${photoUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
};


// Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;
    showCityPhoto(city);
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;
        showCityPhoto(city);
        showWeatherData(city);
    }
});








































// function buscaInput(){ //Traz Inputs do html e ao clicar btn roda o codigo
//     const local = document.querySelector('#cidade-input')
//     const botao = document.querySelector('#buscar')

//     botao.addEventListener('click', (e) => {
//         e.preventDefault();
//         const cidade = local.value;

//         if(cidade === ''){
//             return;
//         }
//         buscaClima(cidade);
// });

// }

// async function buscaClima(cidade) {
//     const key = "6d24fed05a241fd45970f3d36dd1c399"
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;

//     let api = await fetch (url);

//     if(api.ok) {
//         let resposta = await api.json();
//         console.log(resposta);
//         exibir(resposta);
//     } else {
//         console.error("Erro ao buscar clima");
//     }
// }

// function exibir(clima){
//     const climaContainer = document.querySelector('.exibe');
//     climaContainer.innerHTML = `
//     <h2>Clima em ${clima.name}</h2>
//     <div class="clima-info">
//         <p>Temperatura: ${clima.main.temp} ºC</p>
//     </div>
//     `;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     buscaInput();
// });