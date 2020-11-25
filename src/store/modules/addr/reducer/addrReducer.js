import {BEFORE_STATE, ADDR_SUCCESS, ADDR_ERROR} from "../addrTypes"

export const initState = {
    isLoading: false,
    data: false,
    error: false,
}

const addrReducer = (state = initState, action) => {
    switch(action.type) {
        case BEFORE_STATE:
            return {
                ...state,
                isLoading: true,
            }
        case ADDR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case ADDR_ERROR:
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

export default addrReducer;