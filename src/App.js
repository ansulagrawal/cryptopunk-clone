import './App.css';
import Header from './components/Header';
import Punklist from './components/Punklist';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from './components/Main';

function App() {
   const [punkListData, setPunkListData] = useState([]);
   const [selectedPunk, setSelectedPunk] = useState(0);
   let collectionAddress = '0xE6291C64CC4a9e4Ac03CC89E4D83A8617dE52796';
   useEffect(() => {
      const getMyNfts = async () => {
         const openseaData = await axios.get(
            `https://testnets-api.opensea.io/assets?asset_contract_address=${collectionAddress}&order_direction=asc`
         );
         console.log(openseaData.data.assets);
         setPunkListData(openseaData.data.assets);
      };
      return getMyNfts();
   }, []);

   return (
      <div className='app'>
         <Header />
         {punkListData.length > 0 && (
            <>
               <Main punkListData={punkListData} selectedPunk={selectedPunk} />

               <Punklist
                  punkListData={punkListData}
                  setSelectedPunk={setSelectedPunk}
               />
            </>
         )}
      </div>
   );
}

export default App;
