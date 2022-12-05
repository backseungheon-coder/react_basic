import React from 'react';
import Basic_modal from '../componants/Modal';
import {Basic_button,Outline_button} from '../componants/Button';
import {Box,Basic_con,Contents_con,Contents_inner} from '../componants/Box';
import {Footer} from '../componants/Footer'


const Home = () => {
    return (
      <>
      <Contents_con>
        <Contents_inner>
          <h1>홈</h1>
          <p>가장 먼저 보여지는 페이지입니다.</p>        
          <Basic_modal/>
          <Outline_button/>          
        </Contents_inner>
        <Footer/>
      </Contents_con>
       
      </>
    );
  };
  
  export default Home;