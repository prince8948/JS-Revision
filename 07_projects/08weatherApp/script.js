const apiKey = 'fd065ae231b2421147abc9dbaecc9f83'
const apirUrl = ''
async function fetchWeatherData(city) {
    const res = await fetch(apirUrl +   `${apiKey}`)
    const data = res.json()
}