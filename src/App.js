import './App.css';
import Userprofile from './Components/Userprofile/userprofile';
import { Route , Routes } from 'react-router-dom';
import Order from './Components/Order/order';
import Address from './Components/Adderss/address';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Lineitems from './Components/lineItems/lineitem';
import SingleProduct from './Components/SingleProduct/SingleProduct';


function App() {

  const [userProfileData,setUserProfileData] = useState([]);

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Userprofile setUserProfileData={setUserProfileData} />} />
              <Route path='/order' element={<Order userProfileData={userProfileData} />} />
              <Route path='/address' element={<Address userProfileData={userProfileData} />} />
              <Route path='/lineitems/:orderNumber' element={<Lineitems userProfileData={userProfileData} />} />
              <Route path='/lineitems/:orderNumber/:index' element={<SingleProduct userProfileData={userProfileData} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
