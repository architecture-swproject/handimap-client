/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import CircleFramedImage from '../CircleFramedImage';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isNullOrUndefined } from 'core-util-is';

const SideMenu = (props) => {
    const { currentUser } = useSelector((state) => state.Auth);

    return (
        <div className={`navbar-content-container ${props.isOpened ? 'active' : ''}`}>
            <div className="user-info-container navbar-content-wrapper">
                <CircleFramedImage
                    imgUrl={
                        ''
                    }
                    imgAlt={
                            '미 로그인 유저 이미지'
                    }
                    width={50}
                    height={50}
                />
                <div className="user-info-text">
                <p className="user-info-name">{currentUser.username}</p>
                </div>
            </div>
            <div className="menu-container  navbar-content-wrapper">
                {currentUser.isAuthenticated&&<Link className="menu-link-item" to="/login">
                    로그인
                </Link>}
                <Link className="menu-link-item" to="/search">
                    검색
                </Link>
                <Link className="menu-link-item" to="/carrier">
                    휠체어 등록
                </Link>
            </div>
        </div>
    );
};
SideMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
};

export default SideMenu;
