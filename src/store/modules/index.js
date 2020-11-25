import { combineReducers } from "redux"
import addrReducer from "./addr/reducer/addrReducer"
import authReducer from './auth/reducer/authReducer'
import carReducer from "./carrier/reducer/carReducer"
import crossReducer from './cross/reducer/crossReducer'
import elevReducer from './elev/reducer/elevReducer'
import reviewReducer from './review/reducer/reviewReducer'

const reducer = combineReducers({
    Auth: authReducer,
    Cross: crossReducer,
    Elev: elevReducer,
    Car: carReducer,
    Review: reviewReducer,
    Addr: addrReducer,
})

export default reducer