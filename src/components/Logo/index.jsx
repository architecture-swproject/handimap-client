import React, { useEffect, useState } from 'react';
import LogoHorizontal from './LogoHorizontal';
import './Logo.scss';

const Logo = () => {
    return (
        <div className={`__logo-container`}>
            <LogoHorizontal/>
        </div>
    );
};


export default Logo;
