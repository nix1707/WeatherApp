import axios from 'axios';

const api = {
    base: 'https://api.weatherapi.com/v1/',
    key: '5b26f85ea7d142eab8585737231108'
}

export const WeatherService = {
    
    async getForecast(cityName){
        const response = await axios.get(`${api.base}forecast.json?q=${cityName}&days=3&key=${api.key}`)
        return response.data;
    }
}