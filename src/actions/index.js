import axios from 'axios'
import {
    APOD
} from './constantes'

export function getApod(){
    return async function(dispatch){
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=I5DxguIH7SBaK8BtTgrSwWS9Xwp40uZYzlfFLjEf')
        console.log(res)
        return dispatch({
            type: APOD,
            payload: res.data
        })
    }
}