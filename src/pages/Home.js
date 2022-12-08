import Basic_modal from '../componants/Modal';
import {Outline_button} from '../componants/Button';
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Box,Basic_con,Contents_con,Contents_inner} from '../componants/Box';
import Slider from '../componants/Slider';
import Basic_Card from '../componants/Crad'
import {useBotlink} from '../zustand/store.js'

const Item_inner = styled.div`
  padding-top:50px;
  padding-bottom:50px;
  height:auto;
  @media screen and (max-width: 800px) {
  padding-top:30px;
  padding-bottom:30px;
  }
`
const Letter_bot = styled.div`
  height:30px;
  width:100%;
`

const Item_header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid lightgray;
  a{
    text-decoration:none;
    padding:4px;
    font-weight:bold;
    color:#2073bc;
    border:1px solid #2073bc;
    border-radius:8px;
  }
`

function Item_list(){
  return(
    <>
      <Basic_Card></Basic_Card>
    </>
  )
}

export default function Home(){
  const {set_home} = useBotlink(state => state)
  
  useEffect(() => {
    set_home()
  },[]);

    return (
      <>  
          <Slider/>
            <Contents_inner>
              <Item_inner>
                <Item_header><h1>아이템</h1><a href='/item'>더보기</a></Item_header>
                <Letter_bot></Letter_bot>
                <Item_list></Item_list>
              </Item_inner>
            </Contents_inner>
      </>
    );
  };
  