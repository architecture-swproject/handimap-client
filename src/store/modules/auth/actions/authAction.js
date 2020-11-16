import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR, USER_SUCCESS, USER_ERROR, BEFORE_STATE } from './authTypes'
import axios from 'axios';
import setAuthorizationToken from '../../../../authorization'

export const SignIn = (credentials) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.post(`${host}/login`, credentials)
            let userData = res.data.response
            console.log(userData)
            localStorage.setItem("token", userData.token)
            localStorage.setItem('user_data', JSON.stringify(userData));
            setAuthorizationToken(userData.key)
            dispatch({ type: LOGIN_SUCCESS, payload: userData })
        } catch (err) {
            dispatch({ type: LOGIN_ERROR, payload: err.response.data.error })
        }
    }
}