import { BEFORE_STATE, CROSS_SUCCESS, CROSS_ERROR } from "../crossTypes";

export const initState = {
    data: null,
    isLoading: false,
    error: null
}

const crossReducer = (state = initState, action) => {
    switch (action.type) {
        case BEFORE_STATE:
            return {
                ...state,
                isLoading: true,
            }
        case CROSS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case CROSS_ERROR:
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

export default crossReducer;