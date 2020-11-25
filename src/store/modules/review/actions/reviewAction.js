import { BEFORE_STATE, REVIEW_ERROR, REVIEW_SUCCESS, RE_CREATE_SUCCESS, RE_CREATE_ERROR} from '../reviewTypes'
import axios from 'axios';

export const ReviewAPI = (pk, type) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.get(`${host}/${pk}/${type}/review`);
            
            dispatch({ type: REVIEW_SUCCESS, payload: res.data })
        } catch (err) {
            dispatch({ type: REVIEW_ERROR, payload: err })
        }
    }
}

export const ReCreateAPI = (pk, type, body) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.post(`${host}/${pk}/${type}/review`, body);

            dispatch({type: RE_CREATE_SUCCESS, payload: res.data})
        } catch (err) {
            dispatch( { type: RE_CREATE_ERROR, payload: err})
        }
    }
}