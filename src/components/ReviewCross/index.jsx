import React from "react";
import './Review.css';
const ReviewCross = ({item}) =>{

    return <>
        <div className="__reveiw_card">
            <div>
                {item.user_id}
            </div>
            <div>
                {item.body}
            </div>
        </div>
    </>
}

export default ReviewCross;