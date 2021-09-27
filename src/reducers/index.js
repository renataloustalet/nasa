import {
    APOD,
    APOD_START,
    APOD_FAILURE
} from '../actions/constantes'

const initialState = {
    apod: [],
    loading: false,
    error: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case APOD:
            return {
                ...state,
                apod: action.payload,
                error: "",
                loading: false
            }
        case APOD_START:
            return {
                ...state,
                error: "",
                loading: true
            }
        case APOD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

export default reducer;