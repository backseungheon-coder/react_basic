import React, { useState,useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



export function Tab_basic(props) {
  
    console.log(props.key)
  useEffect(() => {
    setKey(props.key)
  },[]);
  const [key, setKey] = useState('usage');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="usage" title="이용안내">
        asd
      </Tab>
      <Tab eventKey="terms" title="이용약관">
        ddd
      </Tab>
      <Tab eventKey="private" title="개인정보 처리방침" >
        ccc
      </Tab>
    </Tabs>
  );
}

