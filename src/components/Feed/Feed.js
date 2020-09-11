import React from 'react'

import StoryReel from './Story/StoryReel';
import PostCreator from './Post/PostCreator';
import Post from './Post/Post';


import '../../styles/Feed.css';

function Feed() {
    return (
        <div className="feed">
            <StoryReel></StoryReel>
            <PostCreator></PostCreator>

            <Post
                profile="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A"
                message="Hello World"
                timestamp="Timestamp"
                name="Germie Fernandez"
            ></Post>
            <Post
                profile="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A"
                message="Hello World"
                timestamp="Timestamp"
                imagesrc="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p320x320/57411761_3028620670490051_4018249081469009920_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=by8EKnNwGjEAX8Ee5Mh&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=937a36e16a48a66f15cd0fb333d003da&oe=5F740D1A"
                name="Germie Fernandez"
            ></Post>
        </div>
    )
}

export default Feed

