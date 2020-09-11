import React from 'react'

function Widget() {
    return (
        <div className="widget">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=350&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1022536594563073" 
                width="350" height="100%" 
                style={{ border: "none", overflow: "hidden", backgroundColor: "#18191a" }}
                scrolling="no" frameborder="0" 
                allowTransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widget
