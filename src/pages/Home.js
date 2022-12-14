import Basic_modal from '../componants/Modal';
import {Outline_button} from '../componants/Button';
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Box,Basic_con,Contents_con,Contents_inner} from '../componants/Box';
import Slider from '../componants/Slider';
import {Card_main} from '../componants/Crad'
import {useBotlink} from '../zustand/store.js'
import Slider_v2 from '../componants/Slider_v2'
import {PersonSquare} from  '@styled-icons/bootstrap/PersonSquare'
import {Buildings} from '@styled-icons/boxicons-regular/Buildings'
import {Link} from 'react-router-dom'
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
const Ai_button = styled.div`
display: none;
@media screen and (max-width: 800px) {
  height:100px;
  
  display:inline;
  width:70%;
  min-width: 380px;
  max-width: 630px;
  margin-top:20px;
  display:flex;
  justify-content:space-between;
}
@media screen and (max-width: 380px) {
  min-width: 340px;
  max-width: 630px;
}

`

const Ai_marketer = styled(Link)`
@media screen and (min-width: 800px) {
  width:44%;
}
  width:48%;
  height:100%;
  background-color:#e9f0f7;
  border-radius:10px;
  display:flex;
  align-items:center;
  text-decoration:none;
  color:black;
  `
const Ai_Brand = styled(Link)`
@media screen and (min-width: 800px) {
  width:44%;
}
  width:48%;
  height:100%;
  background-color:#fff9e8;
  border-radius:10px;
  display:flex;
  align-items:center;
  text-decoration:none;
  color:black;
  `

const Ai_text = styled.p`
@media screen and (min-width: 800px) {
  font-size:24px
}  

  padding:0;
  margin:0;
  font-weight:bold;
  font-size:18px;
`

const Ai_text2 = styled.p`
@media screen and (min-width: 800px) {
  font-size:20px
}
  padding:0;
  margin:0;
  font-size:18px;
`

const Person = styled(PersonSquare)`
color:#2073bc;
width:70%;
`
const Building = styled(Buildings)`
width:70%;

color:#eeb61a;
`




function Item_list(){
  return(
    <>
      <Card_main></Card_main>
    </>
  )
}

export function Ai_button_link(){
  return(
    <>
   
      <Ai_marketer to='/suggest_m'><div style={{display:'flex',justifyContent:'space-evenly',width:'100%',alignItems:'center'}}><div style={{width:'40%',height:'100%',justifyContent:'center',display:'flex',flexDirection:'column'}}><Ai_text style={{color:'#2073bc'}}>?????????</Ai_text><Ai_text2>Ai??????</Ai_text2></div><div style={{width:'40%',display:'flex',justifyContent:'flex-end'}}><Person/></div></div></Ai_marketer>
      <Ai_Brand to='/suggest_b'><div style={{display:'flex',justifyContent:'space-evenly',width:'100%',alignItems:'center'}}><div style={{width:'40%',height:'100%',justifyContent:'center',display:'flex',flexDirection:'column'}}><Ai_text style={{color:'#eeb61a'}}>?????????</Ai_text><Ai_text2>Ai??????</Ai_text2></div><div style={{width:'40%',display:'flex',justifyContent:'flex-end'}}><Building/></div></div></Ai_Brand>

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
          <Slider_v2/>
          <Slider/>
          <Ai_button>
          <Ai_button_link/>  
          </Ai_button>
          
          
          <Contents_inner>
              <Item_inner>
                <Item_header><h1>?????????</h1><a href='/item'>?????????</a></Item_header>
                <Letter_bot></Letter_bot>
                <Item_list></Item_list>
              </Item_inner>
            </Contents_inner>
      </>
    );
  };
  