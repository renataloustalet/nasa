import axios from 'axios'

import {
    APOD
} from './constantes'

var apiKey = process.env.REACT_APP_NASA_KEY;

 export function getApod(date){
    return async function(dispatch){
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=KAOnW0rZfgJYNSGq9H6Jj7XiIJJtdVhDfivrZKKF&date=${date}`)
        console.log(res)
        return dispatch({
            type: APOD,
            payload: res.data
        })
    } 
}
