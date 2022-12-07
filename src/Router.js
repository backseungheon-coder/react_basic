// import React from 'react';
// import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'

import {Basic_button,Outline_button} from './componants/Button';
import {Box,Basic_con,Contents_con,Contents_inner} from './componants/Box';
import {Footer} from './componants/Footer'
import {Footer_m} from './componants/Footer_m'

// const Router = () => {
//     const { accessToken } = useContext(AccessTokenContext);
  
//     return (
//       <Routes>
//         {accessToken ? (
//           <Route element={<Home />}>
//             <Route path="/reservation" element={<ReservationPage />} />
//             <Route path="/member" element={<MemberPage />} />
//             <Route path="/sales" element={<SalesPage />} />
//             <Route path="/voucher" element={<VoucherPage />} />
//             <Route path="*" element={<Navigate to="/reservation" />} />
//           </Route>
//         ) : (
//           <>
//             <Route path="/signin" element={<SignInPage />} />
//             <Route path="*" element={<Navigate to="/signin" />} />
//           </>
//         )}
//       </Routes>
//     );
//   };
  
//   export default Router;

const Router = () => {
 
  
    return (
      

        <Contents_con>
            <Contents_inner>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
            </Routes>
            </Contents_inner>
            
            <Footer_m/>
            <Footer/>
        </Contents_con>


        
      
    );
  };
  
  export default Router;