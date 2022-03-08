import React from 'react'
import   './Header_std.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import image from './image.jpg';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function HeaderStd() {
    return (
             
          <nav className="Header_std" >
            <div className="header-right">
            <div className="header-option">
            <ArrowDropDownIcon   />
            </div>
            <div className="header-option">
            <NotificationsIcon style={{ fontSize:22 }}  />
            </div>

            
            <Link  to="/chat"> 

            <div className="header-option">
            <ChatIcon  style={{ fontSize:22 }}/>
            </div>
            </Link>
            <Link to="/student" className="header_link">
            <div className="header-option header-option--active">
            <HomeIcon style={{ fontSize:22 }}/>
            </div>
            </Link>

             <div className="header-info">
            <h4>مي سامي عبد الرحيم جبر</h4>
            <AccountCircleIcon style={{ fontSize:22 }} />
             </div>
            </div>
                 
            <div className="Header_stds">
            <span>البوابة الإلكترونية</span>

            <img  src={image} alt="descriptionImage" className="Header_imgs"   />
 
            </div>
           
        </nav>
    )
}

export default HeaderStd
