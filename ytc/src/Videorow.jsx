import React from 'react'; 
import'./Videorow.css';

function Videorow({img,views,subs,disc,title,channel,timestamp,}) {
    return (
        <div className='videorow'>
            <img src={img}/>
            <div className='videorow__txt'>
            <h3>{title}</h3>
            <p className='videorow__headline'>
            {channel} {" "}
            <span className="videorow__subs">
            <span className='videorow__subsnum'>{subs}</span>
             subscriber 
             </span> {" "}
             {views} views {timestamp}</p>
            <p className='videorow__disc'>{disc}</p>
            </div>
        </div>
    )
}

export default Videorow
