import axios from 'axios';
import api from './api'

export const WeatherService = {
    
    async getForecast(cityName){
        const response = await axios.get(`${api.base}forecast.json?q=${cityName}&days=3&key=${api.key}`)
        return response.data;
    }
}