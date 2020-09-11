import React from 'react';
import { Avatar } from '@material-ui/core';


import VideoIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import '../../../styles/PostCreator.css'

function PostCreator() {
    return (
        <div className="postCreator">
            <div className="postCreator__body">
                <Avatar 
                    src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A" 
                ></Avatar>
                <span>What's on your mind?</span>
            </div>
            <div className="postCreator__opt">
                <div className="opts">
                    <VideoIcon style={{ color: 'red' }}></VideoIcon>
                    <span>Live Video</span>
                </div>
                <div className="opts">
                    <PhotoLibraryIcon style={{ color: 'green' }}></PhotoLibraryIcon>
                    <span>Photo/Video</span>
                </div>
                <div className="opts">
                    <InsertEmoticonIcon style={{ color: 'yellow' }}></InsertEmoticonIcon>
                    <span>Feeling/Activity</span>
                </div>
            </div>
        </div>
    )
}

export default PostCreator
