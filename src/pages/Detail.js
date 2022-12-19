import {useEffect, useState} from 'react';
import {useBotlink} from '../zustand/store'
import { Routes,Route,useParams } from 'react-router-dom';
import {array} from '../data/List_data'
import styled from 'styled-components';
import { Link } from "react-scroll"

const Detail_con = styled.div`
min-width:800px;
max-width: 1400px;
width:70%;
min-height:92vh;
height:auto;
@media screen and (max-width: 800px) {
  min-height:92vh;
  min-width: 370px;
  max-width: 800px;
  width:100vw;
  height:auto;

}
@media screen and (max-width: 380px) {
  min-width: 330px;
  max-width: 630px;
}
`

const Detail_top = styled.div`
height:550px;
width:100%;
margin-top:40px;
margin-bottom:40px;
display:flex;
flex-direction:row;
@media screen and (max-width: 800px) {
    height:700px;
    flex-direction:column;
    margin-top:0;
}

`
const Detail_top_left = styled.div`
height:100%;
width:60%;
display:flex;
justify-content:flex-start;
@media screen and (max-width: 800px) {
    width:100%;
    height:auto;
}
`
const Detail_thum = styled.img`
width:90%;
height:100%;
border:1px solid lightgray;
border-radius:10px;
@media screen and (max-width: 800px) {
    border:none;
    width:100%;
}

`

const Detail_top_right = styled.div`
height:100%;
width:40%;
display:flex;
justify-content:flex-end;
@media screen and (max-width: 800px) {
    border:none;
    width:100%;
    justify-content:center;
}
`




const Deatul_top_rignt_inner = styled.div`
width: 95%;
height:100%;
@media screen and (max-width: 800px) {
    width:100%;
}

`

const Inner_top =  styled.div`
width: 100%;
min-height:10%;
display:flex;
@media screen and (max-width: 800px) {
    justify-content:center;
    align-items:center;
}
`

const Inner_bot = styled.div`
width: 100%;
height:90%;
border:1px solid lightgray;
border-radius:10px;
display:flex
flex-direction:row;
@media screen and (max-width: 800px) {
    border:none;
}
`

const Text_title = styled.p`
    margin:0;
    width:87%;
    font-size:22px;
    font-weight:bold;
`

const List_inner = styled.div`
width:100%;
height:14.285714285714%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const List_datal = styled.div`
width:20%;
font-size: 18px;
font-weight:bold;
@media screen and (max-width: 800px) {
    width:30%;
}
`
const List_dataR = styled.div`
width:60%;
font-size: 18px;
@media screen and (max-width: 800px) {
    width:50%;
}
`
const Button_inner = styled.button`
    background-color:white;
    border:2px solid #2073bc;
    border-radius: 10px;
    height:60%;
    min-width: 70px;
    width:120px;
    color:#2073bc;
    &:hover{
        border:2px solid #185d99; 
        color:#185d99; 
        background-color:lightgray;
    }
    @media screen and (max-width: 800px) {
        min-width: 20px;
        width:100px;
        height:80%;
    }
`


const Detail_mid = styled.div`
    min-height:500px;
    height:auto;
    width:100%;
    margin-top:40px;
    margin-bottom:40px;
    display:flex;
    flex-direction:row;
    border:1px solid lightgray;
    border-radius:10px;
`

const Detail_bottom = styled.div`
    height:300px;
    width:100%;
    margin-top:40px;
    margin-bottom:40px;
    display:flex;
    flex-direction:row;
    border-radius:10px;
    border-style: solid;
    border-width: 6px 1px 1px 1px;
    border-top-color: #2073bc;
    border-right-color: lightgray;
    border-bottom-color: lightgray;
    border-left-color: lightgray;
`

const Deuail_mid_title = styled.div`
    border-bottom:2px solid #2073bc;
    display:flex;
`
const Detail_mid_inner = styled.div`
    font-size:18px;
    width:auto;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right:20px;
    cursor:pointer;
    &:hover{
        color:#2073bc;
    }
`

const Detail_mid_bot = styled.div`
height:auto;
@media screen and (max-width: 800px) {
    display:none;
}
`

const Detail_mid_bot_m = styled.div`
display:none;
@media screen and (max-width: 800px) {
    height:auto;
    display:flex;
    flex-direction:column;
    align-items: center;
}
`

const Detail_mid_m = styled.div`


    min-height:500px;
    height:${props => props.heightChange ? "200px" : 'auto'};
    width:90%;

    display:flex;
    flex-direction:row;
    border-radius:10px;  


    
`

const Detail_det_btn = styled.button`
background-color:white;
border:1px solid #2073bc;
border-radius: 10px;
height:40px;
width:90%;
font-weight:bold;
font-size:20px;
color:#2073bc;
margin:20px;
cursor:pointer;
&:hover{
    border:2px solid #185d99; 
    color:#185d99; 
    background-color:lightgray;
}
`

const Detail_det = styled.img`

width:100%;
border:1px solid lightgray;
border-radius:10px;
object-position:top;
object-fit: cover;
`

const Detail_bottom_m1 = styled.details`
width:90%;
    border-style:solid;
    border-radius: 10px;
    padding: 10px;

    border-width: 6px 1px 1px 1px;
    border-top-color: #2073bc;
    border-right-color: lightgray;
    border-bottom-color: lightgray;
    border-left-color: lightgray;
    margin-bottom:20px;
`

const Detail_summary = styled.summary`
    color:#2073bc;
    font-weight:bold;
    font-size:20px;
`


export default function About(props){

 const [hstate,sethsstate] = useState(true)

  const {set_item} = useBotlink(state => state)
  const { postId } = useParams(); 

  
  const data = array.find(({id}) => id == postId);

  useEffect(() => {
    set_item()
  },[]);
    return (
        <>
        <Detail_con>
            <Detail_top>
                <Detail_top_left><Detail_thum src={data.src}/></Detail_top_left>
                <Detail_top_right>
                    <Deatul_top_rignt_inner>
                        <Inner_top>
                            <Text_title>{data.title}</Text_title>
                        </Inner_top>        
                        <Inner_bot>
                            <List_inner>
                                <List_datal>아이템 유형:</List_datal>
                                <List_dataR>솔루션</List_dataR>
                            </List_inner>
                            <List_inner>
                                <List_datal>마케터유형:</List_datal>
                                <List_dataR>프리마케터</List_dataR>
                            </List_inner>
                            <List_inner>
                                <List_datal>미션:</List_datal>
                                <List_dataR>전기요금 절감..내용</List_dataR>
                            </List_inner>
                            <List_inner>
                                <List_datal>기간:</List_datal>
                                <List_dataR>1021.02.23 ~ 2021.12.31</List_dataR>
                            </List_inner>
                            <List_inner>
                                <List_datal>인원:</List_datal>
                                <List_dataR>30(1/30)</List_dataR>
                            </List_inner>
                            <List_inner>
                                <List_datal>보상:</List_datal>
                                <List_dataR>금액의 20% 지급</List_dataR>
                            </List_inner>
                            <List_inner>
                                <Button_inner>문의하기</Button_inner>
                                <Button_inner>신청하기</Button_inner>
                                <Button_inner>관심상품</Button_inner>
                            </List_inner>
                        </Inner_bot>
                    </Deatul_top_rignt_inner>
                </Detail_top_right>
            </Detail_top>

            <Detail_mid_bot>

            <Deuail_mid_title  id="de1">
            <Link to="de1" spy={false} smooth={false}>
            <Detail_mid_inner style={{color:'#2073bc'}}>제품상세</Detail_mid_inner>
            </Link>
            <Link to="de2" spy={false} smooth={false}>
            <Detail_mid_inner>미션/보상/특이사항</Detail_mid_inner>
            </Link>
            </Deuail_mid_title>

            <Detail_mid>
            <Detail_det src={data.det}/>
            </Detail_mid>

            <Deuail_mid_title id="de2">
            <Link to="de1" spy={false} smooth={false}>
            <Detail_mid_inner>제품상세</Detail_mid_inner>
            </Link>
            <Link to="de2" spy={false} smooth={false}>
            <Detail_mid_inner style={{color:'#2073bc'}}>미션/보상/특이사항</Detail_mid_inner>
            </Link>
            </Deuail_mid_title>

            <Detail_bottom/>
            <Detail_bottom/>
            <Detail_bottom/>

            </Detail_mid_bot>

            <Detail_mid_bot_m>
                <Detail_mid_m heightChange={hstate}>
                    <Detail_det src={data.det}/>
                </Detail_mid_m>
                <Detail_det_btn onClick={() => {sethsstate(hstate => !hstate)}}>{hstate ? "펼치기" : '접기'}</Detail_det_btn>
                
                <Detail_bottom_m1>
                    <Detail_summary>미션</Detail_summary>
                    <p>미션 내용</p>
                </Detail_bottom_m1>

                <Detail_bottom_m1>
                    <Detail_summary>보상</Detail_summary>
                    <p>미션 내용</p>
                </Detail_bottom_m1>

                <Detail_bottom_m1>
                    <Detail_summary>특이사항</Detail_summary>
                    <p>미션 내용</p>
                </Detail_bottom_m1>
            </Detail_mid_bot_m>

            



        </Detail_con>
        </>
    );
  };
  