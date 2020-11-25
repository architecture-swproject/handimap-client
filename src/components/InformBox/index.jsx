import React from 'react';
import "./InformBox.css";

const InformBox = (props) => {
    
    return <>
        <div className="InformBox">
            {props.children}
        </div>
    </>
}

export default InformBox;