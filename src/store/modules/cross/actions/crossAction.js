import {BEFORE_STATE, CROSS_SUCCESS, CROSS_ERROR} from "../crossTypes"
import axios from 'axios';

export const CROSSAPI = (search) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.get(`${host}/cross?search=${search}`);
            console.log(res);
            let crossData = res.data;
            dispatch({ type: CROSS_SUCCESS, payload: crossData })
        } catch (err) {
            dispatch({ type: CROSS_ERROR, payload: err })
        }
    }
}