import axios from 'axios'

import {
    APOD,
    APOD_FAILURE,
    APOD_START
} from './constantes'

export function getApod(date) {
    return async function (dispatch) {
        dispatch({
            type: APOD_START
        })
        try {
            const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`)
            return dispatch({
                type: APOD,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: APOD_FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}
