import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Logo from "../../components/Logo";
import SizedBox from "../../components/SizedBox";
import WheelChair from "../../components/WheelChair";
import { CarCreateAPI, CarAPI } from "../../store/modules/carrier/actions/carAction";
import { Label, Input, FormGroup, Button, Card, CardHeader, CardBody } from "reactstrap";

import './carrier.css'
const CarrierView = () => {
    const [carrier, setCarrier] = useState({
        name:"",
        mobil:"",
        weight:0,
        width: 0,
        length: 0,
    });
    const dispatch = useDispatch();
    const car = useSelector(state => state.Car)
    const carCreate = (inform) => dispatch(CarCreateAPI(inform));

    useEffect(()=> {
        dispatch(CarAPI())
    }, [])
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
            width: carrier.width,
            length: carrier.length,
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
                <FormGroup>
                    <Label>이름</Label>
                    <Input type="name" name="name" placeholder="이름" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>탈 것 종류</Label>
                    <Input type="mobil" name="mobil" placeholder="탈 것 종류" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>무게/kg</Label>
                    <Input type="weight" name="weight" placeholder="무게/kg" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>넓이</Label>
                    <Input type="width" name="width" placeholder="넓이" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>길이</Label>
                    <Input type="length" name="length" placeholder="길이" onChange={handleChange}/>
                </FormGroup>
                <Button color="primary" type = "submit" >제출</Button>
            </form>
        </div>
    </>
}

export default CarrierView;