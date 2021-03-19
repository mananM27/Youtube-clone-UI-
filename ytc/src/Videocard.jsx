import './Videocard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({img,title,channel,views,timestamp,channelimg})
{   return(
        <div className='video'>
            <img className='video__thumbnail' src={img} alt='Yoyo' />
            <div className='video_info'>
            <Avatar className='video__avtr' alt={channel} src={channelimg}/>
            <div className='video__txt'>
                <h4><b>{title}</b></h4>
                <p>{channel}</p>
                <p>{views} <b>|</b> {timestamp}</p>               
            </div>            
            </div>
        </div>
        )
}

export default VideoCard;
