import {BEFORE_STATE, CAR_SUCCESS, CAR_ERROR} from "../carrierTypes"

export const initState = {
    isLoading: false,
    data: null,
    error: null,
}

const carReducer = (state = initState, action) => {
    switch(action.type) {
        case BEFORE_STATE:
            return {
                ...state,
                isLoading: true,
            }
        case CAR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case CAR_ERROR:
            return {
                isLoading: false,
                ...state,
                data: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default carReducer;