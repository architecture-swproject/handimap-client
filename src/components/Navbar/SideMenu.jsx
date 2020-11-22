/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import CircleFramedImage from '../CircleFramedImage';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isNullOrUndefined } from 'core-util-is';
import SocialConnectLink from './SocialConnectLink';

const InterestClubsList = (props) => {
    if (
        isNullOrUndefined(props.data) ||
        isNullOrUndefined(props.data.user) ||
        props.data.user.interest_club.length <= 0
    ) {
        return <></>;
    } else {
        return (
            <div className="club-list-container  navbar-content-wrapper">
                <div className="club-list-wrapper">
                    <p className="club-list-title">관심 동아리</p>
                    <ul className="club-list">
                        {props.data.user.interest_club.map((item, idx) => {
                            return (
                                <li key={item.interest_club_id} className="club-list-item">
                                    <Link
                                        className="club-list-item-link"
                                        to={`/club/${item.club.club_id}`}
                                    >
                                        {item.club.club_name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

const SideMenu = (props) => {
    const { currentUser } = useSelector((state) => state.Auth);
    const dispatch = useDispatch();

    const fn = {
        user: {
            fetch: () => {
                dispatch();
            },
        },
    };

    useEffect(() => {
        // if (isNullOrUndefined(info.data)) {
        //     fn.user.fetch();
        // }
    }, []);

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
                <Link className="menu-link-item" to="/">
                    메인화면
                </Link>
                <Link className="menu-link-item" to="/search">
                    검색
                </Link>
            </div>
        </div>
    );
};
SideMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
};

export default SideMenu;
