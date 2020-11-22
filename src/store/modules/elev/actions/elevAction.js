import axios from 'axios';
import {BEFORE_STATE, ELEV_SUCCESS, ELEV_ERROR} from "../elevTypes";

export const ELEVAPI = (search, sigungu) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.get(`${host}/elev?search=${search}&sigungu=${sigungu}`);
            console.log(res);
            let elevData = res.data;
            dispatch({ type: ELEV_SUCCESS, payload: elevData});
        } catch (err){
            dispatch({type: ELEV_ERROR, payload: err});
        }
    }
}