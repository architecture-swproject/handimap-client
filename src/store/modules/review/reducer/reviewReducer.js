import { REVIEW_SUCCESS, REVIEW_ERROR, BEFORE_STATE, RE_CREATE_ERROR, RE_CREATE_SUCCESS} from '../reviewTypes'

export const initState = {
    isLoading: false,
    error: false,
    data: false,
    create: false,
}

const reviewReducer = (state = initState, action) => {
    switch(action.type) {
        case BEFORE_STATE:
        return {
          ...state,
          isLoading: true,
        }

      case REVIEW_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload
        }
      case REVIEW_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case RE_CREATE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          create: action.payload,
        }
      case RE_CREATE_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
      default:
        return state;
    }
  }
  
  export default reviewReducer