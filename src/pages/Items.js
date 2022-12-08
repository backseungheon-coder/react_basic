import {useEffect} from 'react';
import {useBotlink} from '../zustand/store'
import {Contents_inner} from '../componants/Box'
import styled from 'styled-components';
import {Search_input_from} from '../componants/Input_form'
import Card from '../componants/Crad'
import Accordion from 'react-bootstrap/Accordion';

const Item_search = styled.div`
  width:100%;
  min-height:130px;
  height:auto;
  display:flex;
  align-items:center;
  justify-contents:center;
  flex-direction:column;
  margin-top:20px;
`
const Item_inner = styled.div`
  padding-top:50px;
  padding-bottom:50px;
  height:auto;
  @media screen and (max-width: 800px) {
  padding-top:0;
  padding-bottom:30px;
  }
`

function BasicExample() {
  return (
    <Accordion  style={{width:'100%',border:'none'}}>
      <Accordion.Item eventKey="0" style={{border:'none'}}>
        <Accordion.Header>내부 카테고리</Accordion.Header>
        <Accordion.Body>
          테스트
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}



function Accordion_menu() {
  return (
    <Accordion style={{width:'100%',borderBottom:'3px solid #2073bc',marginBottom:'20px'}}>
      <Accordion.Item eventKey="0" style={{border:'none'}}>
        <Accordion.Header>상세 조건</Accordion.Header>
        <Accordion.Body style={{width:'100%',padding:'0'}}>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}



export default function Items(){

  const {set_item} = useBotlink(state => state)
  
  useEffect(() => {
    set_item()
  },[]);
    return (
      <>
        <Contents_inner>
          <Item_search>
            <Search_input_from/>
            <Accordion_menu/>
          </Item_search>
          <Item_inner>
          <Card/>
          </Item_inner>
        </Contents_inner>
      </>
    );
};
