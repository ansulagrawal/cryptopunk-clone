import React from 'react';
import './Header.css';
import punkLogo from '../../assets/header/cryptopunk-logo.png';
import searchIcon from '../../assets/header/search.png';
import darkModeIcon from '../../assets/header/dark-mode.png';

const Header = () => {
   return (
      <div className='header'>
         <div className='logoContainer'>
            <img src={punkLogo} alt='punk Logo' className='punkLogo' />
         </div>

         <div className='searchBar'>
            <div className='searchIconContainer'>
               <img src={searchIcon} alt='' />
               <input
                  className='searchInput'
                  placeholder='Collection, item or user...'
               />
            </div>
         </div>

         <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
         </div>

         <div className='headerActions'>
            <div className='darkModeContainer'>
               <img src={darkModeIcon} alt='Dark Mode Icon' />
            </div>
            <div className='loginButton'>GET IN</div>
         </div>
      </div>
   );
};

export default Header;
