import {
    APOD
} from '../actions/constantes'

const initialState = {
    apod: []
}

function reducer(state = initialState, action){
    switch (action.type) {
        case APOD:
            return{
                ...state,
                apod: action.payload
            }
        default: return state
    }
}

export default reducer;