import React from "react";
import "./ReviewForm.css";

const ReviewForm = ({onChange, onSubmit}) => {
    
    return <>
        <form onSubmit={onSubmit} className="reviewForm">
            <input type = "body" name = "body" placeholder ="내용" onChange={onChange}/>

            <button type = "submit" >submit</button>
        </form>
    </>
}

export default ReviewForm;