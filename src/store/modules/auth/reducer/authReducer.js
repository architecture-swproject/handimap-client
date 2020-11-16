import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR, USER_SUCCESS, USER_ERROR, BEFORE_STATE } from './authTypes'
import isEmpty from 'lodash/isEmpty';

export const initState = {
    isAuthenticated: false,
    currentUser: {},
    isLoading: false,
    isLoadingAvatar: false,
    isUpdatingUser: false,
    authError: null,
    authSuccess: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
  
      // This is the state to set when the button is click and we are waiting for response 
      case BEFORE_STATE:
        return {
          ...state,
          authError: null,
          isLoading: true,
        }

      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          currentUser: action.payload,
          isAuthenticated: !isEmpty(action.payload),
          loginError: null,
          signupError: null,
  
        }
      case LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          loginError: action.payload,
          signupError: null,
  
        }
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          currentUser: {},
          logoutError: null,
          isLoading: false,
          signupError: null,
          loginError: null,
        }
        
      default:
        return state;
    }
  }
  
  export default authReducer