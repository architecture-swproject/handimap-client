import React, {useEffect} from 'react';
import SizedBox from '../../components/SizedBox';
import './Map.css';
import { useLocation } from "react-router-dom";
const { kakao } = window;

const MapView = () => {
    const location = useLocation();
    useEffect(()=> {
        console.log(location.state.item.longitude)
        console.log(location.state.item.latitude)
        var container = document.getElementById('myMap');
        var options = {
            center: new kakao.maps.LatLng(Number(location.state.item.latitude),Number(location.state.item.longitude)),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        console.log(location.state.item)

    },[])

    return <>
        <div className = "map_main">
            <SizedBox height="6vh"/>
            <div id="myMap" style={{width:'100%',height:'400px'}}></div>
        </div>
    </>
}

export default MapView;