import React from "react";
import Card from "../Card";

const CardList = ({items, type}) =>{

    return <>
        <div >
            {
                items.map(item => (
                    <Card item = {item} type={type}/>
                ))
            }
        </div>
    </>
}

export default CardList;