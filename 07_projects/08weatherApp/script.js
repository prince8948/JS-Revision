const apiKey = 'fd065ae231b2421147abc9dbaecc9f83'
const apirUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const inputBox = document.querySelector('.input')
const btn = document.querySelector('.btn')
const weatherImg = document.querySelector('.weather-icon')


async function fetchWeatherData(city='lucknow') {
    const res = await fetch(apirUrl + city+ `&appid=${apiKey}`);
    const data = await res.json();
    
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.h-per').innerHTML = data.main.humidity + '%';
    document.querySelector('.w-per').innerHTML = data.wind.speed +'Km/h';
    if(data.weather[0].main =='Clouds'){
        weatherImg.src = "images/cloudes.png"
    }
    else if(data.weather[0].main == 'Snow'){
        weatherImg.src = 'images/snow.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weatherImg.src = 'images/sun.png'
    }
    else if(data.weather[0].main == 'Fog'){
        weatherImg.src = 'images/fog.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weatherImg.src = 'images/rainy.png'
    }
}
btn.addEventListener('click',()=>{
    
    fetchWeatherData(inputBox.value)
})
