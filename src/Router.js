// import React from 'react';
// import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'

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
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
      </Routes>
    );
  };
  
  export default Router;