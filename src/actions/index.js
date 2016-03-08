import axios from 'axios'
import { Weather_API } from "../../config/config"

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Weather_API}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    console.log('Request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}