import React from "react";
import ReviewCross from "../ReviewCross";

const ReviewCrossList = ({items}) => {


    return <>
        {items.map((item) =>(
            <ReviewCross item = {item} key = {item.id}/>
        ))}
    </>
}

export default ReviewCrossList;