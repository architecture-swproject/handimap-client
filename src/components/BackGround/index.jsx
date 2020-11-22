import React from 'react';
import './BackGround.css';
import {useSelector} from "react-redux";
import { Redirect, Link } from "react-router-dom";

export const BackGround = (props) => {
    const currentState = useSelector((state)=> state.Auth);
    let path = window.location.pathname
    // if (!currentState.isAuthenticated & !(path ==="/login")) {
    //     return <Redirect to="/login" />;
    // }
    return <>
        <div className="__backGround">{props.children}</div>
    </>
}

