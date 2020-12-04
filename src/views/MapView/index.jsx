import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import SizedBox from '../../components/SizedBox';
import './Map.css';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { ReCreateAPI, ReviewAPI } from '../../store/modules/review/actions/reviewAction';
import ReviewCross from '../../components/ReviewCross';
import ReviewCrossList from '../../components/ReviewCrossList';
import { ELEVAPI } from '../../store/modules/elev/actions/elevAction';
import InformBox from '../../components/InformBox';
import InformCross from '../../components/InformCross';
import InformElev from '../../components/InformAddr';
import InformAddr from '../../components/InformAddr';
import { CarAPI } from '../../store/modules/carrier/actions/carAction';
import { Calculate } from './cal';
import ReviewForm from '../../components/ReviewForm';
const { kakao } = window;

const MapView = () => {
    const [pk, setPk] = useState(1);
    const [cap, setCap] = useState(0);
    const [body, setBody] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    let item = location.state.item

    let x = location.state.x;
    let y = location.state.y

    const elevAPI = (query) => dispatch(ELEVAPI(query));
    const reviewsAPI = (pk, type)=> dispatch(ReviewAPI(pk, type));
    const carrierAPI = ()=>dispatch(CarAPI())
    const reCreateAPI = (pk, type, body) => dispatch(ReCreateAPI(pk, type, body));
    const type = location.state.type

    const reviews = useSelector(state => state.Review);
    const elev = useSelector(state=> state.Elev);
    const car = useSelector(state=> state.Car);

    const handleClick = (t) => {
        elev.data.map((item, i)=>`${i+1} 호` === t.innerText ? setPk(i+1):null)
    }
    const handleChange = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        reCreateAPI(elev.data[pk-1].id, type, {body: body})
    }
    console.log(pk)
    useEffect(()=> {
        if(elev.data){
            document.addEventListener("click", (e)=>handleClick(e.target))
        }
        carrierAPI()
        if(type === "cross"){
            reviewsAPI(item.id, type);
        } else {
            elevAPI(item.place_name);
            if(elev.data && elev.data.length > 0){
                reviewsAPI(elev.data[pk-1].id, type)
                
                setCap(elev.data[pk-1].ratedCap.slice(0,2))
            }
        }
    
        var container = document.getElementById('myMap');
        var options = {
            center: new kakao.maps.LatLng(y,x),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(y, x); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        let iwContent = ""
        if(type === "elev"){
            iwContent = `<div style = "padding:5px;height:100%;">장소명: ${item.place_name}<br>주소: ${item.address_name}<br> </div>`;
            if(elev.data){
                iwContent = `<div style = "max-width:250px;top:0;padding:5px;height:100%;overflow:auto;width:100%;background-color:white;border-color:rgb(118, 129, 168);border-style:solid;border-width:2px">장소명: ${item.place_name}<br>주소: ${item.address_name}<br>${elev.data.map((item,i) => `<div id="select${i+1}" style="display:inline; font-size:20px">${i+1} 호</div>`)} </div>`;
            }
        } else if(type==="cross"){
            iwContent = `<div style="padding:5px;">장소명: ${item.ovrpsNm}<br>편의시설: ${item.handicapCvntlType}<br>별 개수: ${item.star_num}</div>`;
        }
        let iwPosition = new kakao.maps.LatLng(x, y); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker); 
    },[elev.error, pk, reviews.create])
    if (elev.data && elev.data.length <=0){
        return <>
            <div>엘레베이터 정보가 없습니다.</div>
        </>
    }
    return <>
        <div className = "map_main">
            <SizedBox height="6vh"/>
            <div id="myMap" style={{width:'100%',height:'400px'}}></div>
            <InformBox>
                {type === "cross" && <InformCross item = {item} />}
                {type === "elev" && elev.data && <InformAddr item = {elev.data[pk-1]} />}
                {elev.data && car.data && <Calculate size={car.data[0]} cap={cap}/>}
            </InformBox>
            <ReviewForm onChange = {handleChange} onSubmit={handleSubmit} />
            {reviews.data && <ReviewCrossList items = {reviews.data} /> }
        </div>
    </>
}

export default MapView;