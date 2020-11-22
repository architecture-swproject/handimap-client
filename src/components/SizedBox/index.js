import React from 'react';

const SizedBox = (props) => {
    return <>
        <div style = {{height:props.height, width:props.width}}></div>
    </>
}

export default SizedBox;