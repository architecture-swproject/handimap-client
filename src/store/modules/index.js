import { combineReducers } from "redux"
import authReducer from './auth/reducer/authReducer'
import carReducer from "./carrier/reducer/carReducer"
import crossReducer from './cross/reducer/crossReducer'
import elevReducer from './elev/reducer/elevReducer'
const reducer = combineReducers({
    Auth: authReducer,
    Cross: crossReducer,
    Elev: elevReducer,
    Car: carReducer,
})

export default reducer