import './Slidebar.css';
import SlidebarRaw from './SlidebarRaw';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Slidebar() { 
    return(
        <div className='slidebar' >
           <SlidebarRaw selected Icon={HomeIcon} title='Home'/> 
           <SlidebarRaw Icon={WhatshotIcon} title='Trending'/> 
           <SlidebarRaw Icon={SubscriptionsIcon} title='Subscribed'/> 
           <hr />
           <SlidebarRaw Icon={VideoLibraryIcon} title='Library'/> 
           <SlidebarRaw Icon={HistoryIcon} title='History'/> 
           <SlidebarRaw Icon={OndemandVideoIcon} title='OnDemandVideo'/> 
           <SlidebarRaw Icon={WatchLaterIcon} title='WatchLater'/> 
           <SlidebarRaw Icon={ThumbUpAltOutlinedIcon} title='Liked Video'/> 
           <SlidebarRaw Icon={ExpandMoreOutlinedIcon} title='Show More'/> 
           <hr />
        </div> 
    )
}



export default Slidebar;