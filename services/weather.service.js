import axios from 'axios';
import api from './api'

export const WeatherService = {
    
    async getForecast(cityName){
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=3&key=${api.key}`)
        return response.data;
    }
}