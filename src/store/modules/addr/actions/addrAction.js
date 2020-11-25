import {BEFORE_STATE, ADDR_SUCCESS, ADDR_ERROR} from "../addrTypes";
import axios from "axios";

const AddrAPI = (query) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try{
            const res = await axios({
                method: "get",
                url: `http://dapi.kakao.com/v2/local/search/keyword.json?query=${query}`,
                headers: {
                    Authorization:"KakaoAK 1cad9c7004aea5a97bf36a81eeb0b970",
                },
            });
            res.data.documents = res.data.documents.filter(rst => rst.address_name.slice(0,2) === "서울");
            dispatch({type: ADDR_SUCCESS, payload: res.data});
        } catch (err) {
            dispatch({type: ADDR_ERROR, payload: err})
        }
    }
}

export default AddrAPI;