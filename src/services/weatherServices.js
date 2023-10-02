import axios from 'axios'

async function getWeatherForCity(city){
return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units&metric&appid=7e6bb1426b6090c0571b94c21647c14`)
}
export default getWeatherForCity;