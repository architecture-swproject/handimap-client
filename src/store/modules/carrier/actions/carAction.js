import {BEFORE_STATE, CAR_SUCCESS, CAR_ERROR} from "../carrierTypes";
import axios from "axios";

export const CarCreateAPI = (carrier) => {
    return async (dispatch) => {
        dispatch({type: BEFORE_STATE});
        try{
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.post(`${host}/carrier`, carrier);
            dispatch({type: CAR_SUCCESS, payload: res.data});
        } catch (err) {
            dispatch({type: CAR_ERROR, payload: err})
        }
    }
}

export const CarAPI = () => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE })
        try {
            const host = process.env.REACT_APP_API_HOST;
            const res = await axios.get(`${host}/carrier`);
            console.log(res);
            let elevData = res.data;
            dispatch({ type: CAR_SUCCESS, payload: elevData});
        } catch (err){
            dispatch({type: CAR_ERROR, payload: err});
        }
    }
}