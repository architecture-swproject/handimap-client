import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Logo from "../../components/Logo";
import SizedBox from "../../components/SizedBox";
import WheelChair from "../../components/WheelChair";
import { CarCreateAPI, CarAPI } from "../../store/modules/carrier/actions/carAction";

import './carrier.css'
const CarrierView = () => {
    const [carrier, setCarrier] = useState({
        name:"",
        mobil:"",
        weight:0,
        size: "",
    });
    const dispatch = useDispatch();
    const car = useSelector(state => state.Car)
    const carCreate = (inform) => dispatch(CarCreateAPI(inform));

    useEffect(()=> dispatch(CarAPI()), [])
    const handleChange = (e) => {
        setCarrier({
            ...carrier,
            [e.target.name]: e.target.value,
        })
    }



    const submitCar = (e) => {
        e.preventDefault();
        carCreate({
            carrier_nm: carrier.name,
            type: carrier.mobil,
            weight: carrier.weight,
            size: carrier.size,
        });
      };
      console.log(carrier)

      if(car.data) {
          if(car.data.length > 0){
            return <Redirect to="/search" />
          } else if (car.data.id){
              return <Redirect to="/search" />
          }
      }

    return <>
        <div className="main">
            <WheelChair />
            <SizedBox height="12px" />
            <div>
                Handi Map
            </div>
            <SizedBox height="12px" />
            <form className="card" onSubmit={submitCar}>
                <form>
                    <input type="name" name="name" placeholder="name" onChange={handleChange}/>
                </form>
                <form>
                    <input type="mobil" name="mobil" placeholder="mobil" onChange={handleChange}/>
                </form>
                <form>
                    <input type="weight" name="weight" placeholder="weight" onChange={handleChange}/>
                </form>
                <form>
                    <input type="size" name="size" placeholder="size" onChange={handleChange}/>
                </form>
                <button type = "submit" >submit</button>
            </form>
        </div>
    </>
}

export default CarrierView;