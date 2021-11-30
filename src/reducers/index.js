import {
    APOD,
    LOADING,
    APOD_FAILURE
} from '../actions/constantes'

const initialState = {
    apod: [],
    error: "",
    loading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case APOD:
            return {
                ...state,
                apod: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case APOD_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default reducer;