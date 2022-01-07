import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.css';

import Linkedin from './assets/images/linkedin.png';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"

import HeaderOption from './HeaderOption';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src={Linkedin} alt="linkedin" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
                <HeaderOption Icon={ChatIcon} title="Message" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar  title="me" onClick={logoutOfApp} />
            </div>
        </div>
        
    )
}

export default Header
