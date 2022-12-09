import React,{useState,useRef,useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link,Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Ai_img from '../src/Ai_img.png'
const Search_con  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Search_button = styled.button`
    height: 60px;
    width: 400px;
    background: none;
    border: 1px solid white;
    border-radius:15px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.1);
`

const Search_box = styled.div`
`

const Image_ai = styled.img`
    height: 90%;
    width: 10%;
    margin-left:10px;
`



const Text_market = styled.p`
    font-weight: bold;
    font-size:${function(props){
        return props.font_size;
    }};
    color: ${function(props){
        return props.color;
    }};
    margin-bottom:10px;
    `

function Basic_con(props) {

    const textlist = [
        {
            title:'100세 시대! 수익활동 참여가 필요하신가요?',
            detail:'일반인도 교육받고 쉽게 참여할 수 있습니다.'
        },
        {
            title:'뉴모멀 시대! 사업하기 어려우시죠?',
            detail:`중소기업의 영업, '스마랑'과 함께하세요.`
        },
        {
            title:'기업과 세일즈마케터 매칭 플랫폼, 스마랑!',
            detail:'중소기업과 영업하는 긱워커를 연결합니다.'
        },
    ]

  return (
        <>
        <Search_con>
            <Search_box>
                <Text_market font_size={'20px'} color={'lightgray'}>
                    {textlist[props.num_state].title}
                </Text_market> 
                    
                <Text_market font_size={'32px'} color={'white'}>
                    {textlist[props.num_state].detail}
                </Text_market> 
            </Search_box>

            <Search_button>
                <Image_ai src={Ai_img}/><div style={{width:'80%',display:'flex',justifyContent:'center'}}>인공지능 자동 추천</div><div style={{width:'10%'}}/>
            </Search_button>

        </Search_con>
    
        </>
  );
}

export default Basic_con;
