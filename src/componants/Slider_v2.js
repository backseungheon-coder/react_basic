import React,{useState,useRef,useEffect,Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Carousel from './Carousel'
import Search_market from './Search_market';


const Continer_con = styled.div`
  width: 100%;
  height:550px;
  background-color: ${function(props){
      return props.color;
  }};
  display:flex;
  justify-content:center;
  @media screen and (max-width: 800px) {
    display: none;
  }


` 

const Con_inner = styled.div`
  height: 100%;
  display: flex;
  min-width:800px;
  max-width: 1400px;
  width:70%;

`

const Search_con = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Slide_con = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
`

const Slide_inner = styled.div`
    min-width:  400px;
    max-width: 650px;
    width:100%;
`

const Search_div = styled.div`
width: 100%;
height: 70%;
`



function Matching_main() {
    const [colorstate,setColorstate] = useState('#3c75bd')
    const [num_state,setnum_state] = useState(0);
  return (
    <>
        <Continer_con color={colorstate}>
            <Con_inner>
                <Search_con>
                    <Search_div>    
                        <Search_market num_state={num_state}/>
                    </Search_div>
                </Search_con>
                <Slide_con>
                    <Slide_inner>
                        <Carousel setColorstate={setColorstate} setnum_state={setnum_state}/>
                    </Slide_inner> 
                </Slide_con>
            </Con_inner>
        </Continer_con>
            

    </>
  );
}



export default Matching_main;
