import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import '../styles/Header.css';

//icons left
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';

//icons center
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIconOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StorefrontIconOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import GroupIcon from '@material-ui/icons/SupervisedUserCircle';
import GamesIconOutlinedIcon from '@material-ui/icons/GamesOutlined';

//icons right
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <FacebookIcon />
                </div>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"></input>
                </div>
            </div>
            <div className="header__center">
                <div className="header__menu menu--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__menu">
                    <OndemandVideoIconOutlinedIcon fontSize="large" />
                </div>
                <div className="header__menu">
                    <StorefrontIconOutlinedIcon fontSize="large" />
                </div>
                <div className="header__menu">
                    <GroupIcon fontSize="large" />
                </div>
                <div className="header__menu">
                    <GamesIconOutlinedIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A"/>
                    <h4>Germie</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
