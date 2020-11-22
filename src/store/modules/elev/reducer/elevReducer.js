import { BEFORE_STATE, ELEV_SUCCESS, ELEV_ERROR } from "../elevTypes"

export const initState = {
    isLoading: false,
    data: null,
    error: null,
}

const elevReducer = (state = initState, action) => {
    switch (action.type) {
        case BEFORE_STATE:
            return {
                ...state,
                isLoading: true,
            }
        case ELEV_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case ELEV_ERROR:
            return {
                ...state,
                isLoading: false,
                data: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default elevReducer