import React from 'react'

import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/ChatBubbleOutlined';
import ShareIcon from '@material-ui/icons/Share';

import '../../../styles/Post.css'
function Post({ timestamp, profile, name, message, imagesrc, videosrc, like, comments }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profile} className="post__avatar"></Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <span>{timestamp}</span>
                </div>
            </div>
            <div className="post__content">
                <p>{message}</p>
                { imagesrc && <img src={imagesrc} alt="" className="source"></img>}
                { videosrc && <video src={videosrc} alt="" className="source"></video>}
            </div>
            <div className="post__actions">
                <div className="counters">
                    {like && <p>{like}</p>}
                    {comments && <p>{comments}</p>}
                </div>
                <div className="actions">
                    <ThumbUpIcon></ThumbUpIcon>
                    <span>Like</span>
                </div>
                <div className="actions">
                    <ChatIcon></ChatIcon>
                    <span>Comments</span>
                </div>
                <div className="actions">
                    <ShareIcon></ShareIcon>
                    <span>Share</span>
                </div>
            </div>
            <div className="post__comments">

            </div>
        </div>
    )
}

export default Post
