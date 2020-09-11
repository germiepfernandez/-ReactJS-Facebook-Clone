import React from 'react'
import { Avatar } from '@material-ui/core';

import '../../../styles/Story.css'
function Story({ profile, name, story}) {
    return (
        <div className="story" style={{ backgroundImage: `url(${story})`}}>
            {profile && <Avatar className="story__avatar" src={profile} />}
            <h4>{name}</h4>
        </div>
    )
}

export default Story
