import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function PostModal() {
    const handleSubmit = function (e) {
        e.preventDefault();
    }

    return (
        <div className="modal postModal">
            <div className="titleBar">
                <h3>Create Post</h3>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="postBody">
                <Avatar 
                    src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A" 
                ></Avatar>
                <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <div className="postBotom">
                <button onClick={handleSubmit}></button>
            </div> 
        </div>
    )
}

export default PostModal
