import React, { useEffect, useState } from 'react';
import './Main.css';
import instagramLogo from '../../assets/owner/instagram.png';
import twitterLogo from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';

const Main = ({ selectedPunk, punkListData }) => {
   const [activePunk, setActivePunk] = useState(punkListData[0]);

   useEffect(() => {
      console.log('selectedPunk', selectedPunk);
      setActivePunk(punkListData[selectedPunk]);
   }, [punkListData, selectedPunk]);

   return (
      <div className='main'>
         <div className='mainContent'>
            <div className='punkHighlight'>
               <div className='punkContainer'>
                  <img
                     className='selectedPunk'
                     src={activePunk.image_url}
                     alt={activePunk.name}
                  />
               </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
               <div className='title'>
                  {activePunk.name}
                  <span className='itemNumber'>#{activePunk.token_id}</span>
               </div>

               <div className='owner'>
                  <div className='ownerImageContainer'>
                     <img
                        src={activePunk.owner.profile_img_url}
                        alt='Owner Profile Image'
                     />
                  </div>

                  <div className='ownerDetails'>
                     <div className='owerNameAndHandle'>
                        <div>{activePunk.owner.address}</div>
                        <div className='ownerHandle'>@ansul</div>
                     </div>
                     <div className='ownerLinks'>
                        <div className='ownerLink'>
                           <img src={twitterLogo} alt='twitter logo' />
                        </div>
                        <div className='ownerLink'>
                           <img src={instagramLogo} alt='instagram logo' />
                        </div>
                        <div className='ownerLink'>
                           <img src={moreIcon} alt='more icon' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;
