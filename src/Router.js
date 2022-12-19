// import React from 'react';
// import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Items from './pages/Items.js'
import Mypage from './pages/Mypage.js'
import Notice from './pages/Notice'
import Detail from './pages/Detail'
import Suggest_B from './pages/Suggest_B'
import Suggest_M from './pages/Suggest_M'
import Terms from './pages/Terms.js';


import {Basic_button,Outline_button} from './componants/Button';
import {Box,Basic_con,Contents_con,Contents_inner} from './componants/Box';
import {Footer} from './componants/Footer'
import {Footer_m} from './componants/Footer_m'



const Router = () => {
 
  
    return (

        <Contents_con>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item" element={<Items/>} />
                <Route path="/mypage" element={<Mypage/>} />
                <Route path="/notice" element={<Notice/>} />
                <Route path="/suggest_b" element={<Suggest_B/>} />
                <Route path="/suggest_m" element={<Suggest_M/>} />
                <Route path="/Terms" element={<Terms/>} />
                <Route path="/item/:postId" element={<Detail/>} />
            </Routes>

            <Footer_m/>
            <Footer/>
        </Contents_con>

    );
  };
  
  export default Router;