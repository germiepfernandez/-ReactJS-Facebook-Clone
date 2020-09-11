import React from 'react';

// Compnents
import SidebarRow from './SidebarRow';

import EmojiIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';


import '../../styles/Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">            
            <SidebarRow title="Germie Fernandez" 
                avatar="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A">
            </SidebarRow>

            <SidebarRow title="Pages" Icon={EmojiIcon}></SidebarRow>
            <SidebarRow title="Friends" Icon={PeopleIcon}></SidebarRow>
            <SidebarRow title="Messenger" Icon={ChatIcon}></SidebarRow>
            <SidebarRow title="Marketplace" Icon={StorefrontIcon}></SidebarRow>
            <SidebarRow title="Videos" Icon={VideoLibraryIcon}></SidebarRow>
            <SidebarRow title="See More" Icon={ExpandMoreIcon}></SidebarRow>
        </div>
    )
}

export default Sidebar
