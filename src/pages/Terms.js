import {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import {useBotlink} from '../zustand/store'
import {Contents_con,Contents_inner} from '../componants/Box'
import {Tab_basic} from '../componants/Tabs'
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Div_inner = styled.div`
height:100%;
width:100%;
border:1px solid black;
`

export default function Terms(){

    const location = useLocation(); 
  const [key,setKey] =useState('')
  useEffect(() => {
    setKey(location.state.tab);
  },[]);

    console.log(key)
    return (
        <>
              <Contents_con>
                <Contents_inner style={{marginTop:'30px'}}>
                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="usage" title="이용안내">
                    이용 안내
                </Tab>
                <Tab eventKey="terms" title="이용약관">
                    이용 약관
                </Tab>
                <Tab eventKey="private" title="개인정보 처리방침" >
                    개인정보 처리방침
                </Tab>
                </Tabs>
                </Contents_inner>
              </Contents_con>
        </>
    );
  };
  