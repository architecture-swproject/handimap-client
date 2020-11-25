import React from "react";
import { useHistory } from "react-router-dom";
import './Card.css'
const Card = ({item, type}) => {
    let history = useHistory();

    const handleClick = () => {
        if (type === "elev"){
            history.push(
                `/map/${type}`,
                {
                    id: item.id,
                    type: type,
                    item: item,
                    x: item.x,
                    y: item.y,
                }
            )
        } else {
            history.push(
                `/map/${type}`,
                {
                    id: item.id,
                    type: type,
                    item: item,
                    x: item.longitude,
                    y: item.latitude,
                }
            )
        }
    }

    if(type === "elev"){
        return <>
            <div className="__card" onClick= {handleClick}>
                <div >
                    <div>{item.place_name}</div>
                    <div>{item.address_name}</div>
                    <div>{item.category_name}</div>
                </div>

            </div>
        </>
    } else {
        return <>
            <div className="__card" onClick={handleClick}>
                <div>
                    <div>{item.ovrpsNm}</div>
                    <div>{item.rdnmadr}</div>
                    <div>{item.handicapCvntlType}</div>
                </div>
                <div>star:{item.star_num}</div>
            </div>
        </>
    }
}

export default Card;