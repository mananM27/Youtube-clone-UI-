import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from'@material-ui/icons/Search';
import VideoCallIcon from'@material-ui/icons/VideoCall';
import AppsIcon from'@material-ui/icons/Apps';
import NotificationsIcon from'@material-ui/icons/Notifications';
import Avatar from'@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
function Header() { 
    const[inputSearch,setInputSearch]=useState('');
    return(
        <div className="header">
            <div className='heade_left'>           
                <MenuIcon />
                <Link to='/'><img className='header__img' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'  alt='Youtube'></img></Link>
           </div> 
           <div className='header__center'>
                <input 
                onChange={(e)=>{setInputSearch(e.target.value)}}
                type='text' 
                placeholder='Search'
                value={inputSearch}
                />
                <Link to={`/search/${inputSearch}`}><SearchIcon className='header__inputbutton'/></Link>
            </div>
            <div className='header__right'>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
               <NotificationsIcon className='header__icon'/>
                <Avatar className='header__icon'/>
            </div>
         </div>
        )
};

export default Header;