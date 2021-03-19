import React from 'react';
import './ChannelRow.css';
import {Avatar} from'@material-ui/core';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

function ChannelRow({chnlimage,verified,channel,subs,noOfVids,disc}) {
    return (
        <div className='channelrow'>
        <Avatar className='channelrow__avtr'
            alt={channel}
            src={chnlimage}
        />
            <div className='channelrow__text'>
            <h4>
                {channel}  {verified && <CheckCircleOutlineSharpIcon />} 
            </h4>
            <p>
            {subs}Subscriber | {noOfVids} Videos
            </p>
            <p>
            {disc}
            </p>
            </div>
            
        </div>
    )
}

export default ChannelRow
