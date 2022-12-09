import {useEffect} from 'react';
import {useBotlink} from '../zustand/store'
import { Routes,Route,useParams } from 'react-router-dom';
import {array} from '../data/List_data'
import styled from 'styled-components';


const Detail_con = styled.div`
min-width:800px;
max-width: 1400px;
width:70%;
min-height:92vh;
height:auto;
@media screen and (max-width: 800px) {
  min-height:92vh;
  min-width: 370px;
  max-width: 630px;
  height:auto;

}
@media screen and (max-width: 380px) {
  min-width: 330px;
  max-width: 630px;
}
`

const Detail_top = styled.div`
height:500px;
width:100%;
margin-top:40px;
display:flex;
flex-direction:row;

`
const Detail_top_left = styled.div`
height:100%;
width:60%;
display:flex;
justify-content:flex-start;
`
const Detail_thum = styled.img`
width:90%;
height:100%;
border:1px solid lightgray;
border-radius:10px;
`

const Detail_top_right = styled.div`
height:100%;
width:40%;
display:flex;
justify-content:flex-end;
`




const Deatul_top_rignt_inner = styled.div`
width: 95%;
height:100%;
`

const Inner_top =  styled.div`
width: 100%;
height:15%;
display:flex;
`

const Inner_bot = styled.div`
width: 100%;
height:85%;
border:1px solid lightgray;
border-radius:10px;
display:flex
flex-direction:row;
`

const Text_title = styled.p`
    maring:0;
    font-size:20px;
    font-weight:bold;

`

const List_inner = styled.div`

width:100%;
height:16.66666666%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const List_datal = styled.div`
width:20%;
font-size: 18px;
font-weight:bold;
`
const List_dataR = styled.div`
width:60%;
font-size: 18px;
`



export default function About(props){

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
                        </Inner_bot>
                    </Deatul_top_rignt_inner>
                </Detail_top_right>
            </Detail_top>
        </Detail_con>
        </>
    );
  };
  