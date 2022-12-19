import styled from 'styled-components'

import Accordion from 'react-bootstrap/Accordion';

const Footer = styled.div`
    display:none;
    @media screen and (max-width: 800px) {
        height:auto;
        width:100%;
        border-top:1px solid lightgray;
        display: flex;
        align-items: center;
        flex-direction:column;
        margin-bottom:30px;
    }
`
const Footer_text_box = styled.div`
    min-height:80px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const Footer_text = styled.p`
    font-size:12px;
    margin:0;
`



export function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0"  style={{border:'none'}}>
        <Accordion.Header>(주)네스타 사업자 정보</Accordion.Header>
        <Accordion.Body>
            <p>전화번호 : 070-7714-1314</p>
            <p>메일 : marconu@nesta.co.kr</p>
            <p>대표 : 조은제</p>
            <p>사업자등록번호:230-87-01450</p>
            <p>주소 : 경기도 광명시 오리로 362, 607호</p>
            <p>통신판매업신고 : 2020-경기광명-0459</p>
            <p>개인정보보호책임자 : 조은제</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}



export function Footer_m(){

    return(
        <>
            <Footer>
                <Footer_text_box>
                    <Footer_text>(주)네스타는 통신판매중개자로서 통신판매의 당사자가 아닙니다</Footer_text>
                    <Footer_text>개별 판매자가 제공하는 서비스에 대한 이행,</Footer_text>
                    <Footer_text>계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.</Footer_text>
                </Footer_text_box>
                <AllCollapseExample></AllCollapseExample>
            </Footer>
        </>
    )
}



