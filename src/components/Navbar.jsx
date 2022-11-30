import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import {imgSrc} from "../static/"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <img src={imgSrc.logo} alt="" />
        </div>

        <div className="navbar__search">
            <h4>Anywhere</h4>
            <div className="divider"></div>
            <h4>Any week</h4>
            <div className="divider"></div>
            <div className="navbar__search--guests">
                <h4>Add guests</h4>
                <SearchIcon />

            </div>
        </div>
        
        <div className="navbar__profile">
            <div className="navbar__profile--left">    
            <div>Airbnb your home</div>
                <LanguageIcon />
            </div>
            <div className="navbar__profile--user">
                <MenuIcon />
                <div className="navbar__profile--userAvatar">
                    <img src={imgSrc.avatar} alt="IMG" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
