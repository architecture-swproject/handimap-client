import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR, USER_SUCCESS, USER_ERROR, BEFORE_STATE } from '../authtypes'
import axios from 'axios';
import setAuthorizationToken from '../../../../authorization'

export const SignIn = (credentials) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const token = await axios.post(`http://localhost:8000/rest-auth/login/`, credentials);
            let res = token.data;
            let userData = res;
            localStorage.setItem("token", userData.token);
            localStorage.setItem('user_data', JSON.stringify(userData.user));
            setAuthorizationToken(userData.token)
            dispatch({ type: LOGIN_SUCCESS, payload: userData.user })
        } catch (err) {
            dispatch({ type: LOGIN_ERROR, payload: err })
        }
    }
}