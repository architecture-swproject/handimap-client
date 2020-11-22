import React from "react";
import { useHistory } from "react-router-dom";
import './Card.css'
const Card = ({item, type}) => {
    let history = useHistory();

    const handleClick = () => {

        history.push(
            "/map",
            {
                id: item.id,
                type: type,
                item: item,
            }
        )
        console.log("card click")
    }

    if(type === "elev"){
        return <>
            <div className="__card" onClick= {handleClick}>
                <div >
                    <div>{item.buldNm}</div>
                    <div>{item.address1}</div>
                    <div>{item.address2}</div>
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