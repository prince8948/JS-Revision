const apiKey = 'fd065ae231b2421147abc9dbaecc9f83'
const apirUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const inputBox = document.querySelector('.input')
const btn = document.querySelector('.btn')



async function fetchWeatherData(city) {
    const res = await fetch(apirUrl + city+ `&appid=${apiKey}`);
    const data = await res.json();
    
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.h-per').innerHTML = data.main.humidity+'%';
    document.querySelector('.w-per').innerHTML = data.wind.speed +'Km/h';
    console.log(data);
    
}
btn.addEventListener('click',()=>{
    fetchWeatherData(inputBox.value)
})
