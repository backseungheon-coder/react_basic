import React from 'react';
import Basic_modal from '../componants/Modal';
import {Basic_button,Outline_button} from '../componants/Button';

const Home = () => {
    return (
      <div>
        <h1>홈</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <Basic_modal/>
        <Outline_button/>
      </div>
    );
  };
  
  export default Home;