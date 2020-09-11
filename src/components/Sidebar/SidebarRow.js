import React from 'react'

import { Avatar } from '@material-ui/core';

// style
import '../../styles/SidebarRow.css';

function SidebarRow({ title, avatar, Icon }) {
    return (
        <div className="sidebarRow">
            {avatar && <Avatar src={avatar} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;
