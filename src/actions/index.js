import axios from 'axios'

import {
    APOD,
    APOD_START,
    APOD_FAILURE
} from './constantes'

export function getApod(date) {
    return async function (dispatch) {
        try {
            dispatch({ 
                type: APOD_START 
            })
            const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=KAOnW0rZfgJYNSGq9H6Jj7XiIJJtdVhDfivrZKKF&date=${date}`)
            return dispatch({
                type: APOD,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: APOD_FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}
