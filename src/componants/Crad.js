import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const Img_con= styled.div`
    // background-color:gray;
    width:100%;
    height: 350px;
    display:flex;
    justify-content:center;
    @media screen and (max-width: 800px) {
    height: 120px;
        
    }
`

const Img_inner = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    border:1px solid lightgray;
    @media screen and (max-width: 800px) {
        flex-direction:row;
            
        }

`

const Img_box = styled.div`
    width:100%;
    height:50%;
    background-color:lightgray;
    @media screen and (max-width: 800px) {
        width:50%;
        height:100%;
            
        }
`

const Img_info = styled.div`
    width:100%;
    height:50%;
    @media screen and (max-width: 800px) {
        width:50%;
        height:100%;   
        }
`

const Cate_div =   styled.div`
    border:2px solid #2073bc;
    border-radius:15px;
    width: 90px;
    display:flex;
    justify-content:center;
    color:#2073bc;
    background-color:#ebf4fc;
    font-size:15px
    
    ;
`

const Text_header = styled.div`
    width:100%;
    height:20%;
    display:flex;
    align-items: center;
    padding-left:6px;
    padding-right:6px;
    @media screen and (max-width: 800px) {
        display:flex;
        align-items: center;
        height:30%;
        
            
        }
`

const Text_mid = styled.div`
    width:100%;
    height:50%;
    padding-top:10px;
    font-size:18px;
    padding-left:6px;
    padding-right:6px;
    @media screen and (max-width: 800px) {
        padding-top:0;
        font-size:16px;  
        height:40%;   
        }
`

const Text_bot = styled.div`
    width:100%;
    height:30%;
    display:flex;
    font-weight:bold;
    border-top:1px solid lightgray;
    justify-content:flex-end;
    font-size:16px;
    align-items:center;
    padding-left:6px;
    padding-right:6px;
    @media screen and (max-width: 800px) {
        padding-top:0;
        font-size:14px;     
    }
`



export default function Basic_Card() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
            <Img_con>
                <Img_inner>
                    <Img_box>
                        이미지 들어갈 자리
                    </Img_box>
                    <Img_info>
                        <Text_header><Cate_div>프리마케터</Cate_div></Text_header>
                        <Text_mid>전기요금 절감 컨설팅 솔루션</Text_mid>
                        <Text_bot>판매 금액의 20% 부터</Text_bot>
                    </Img_info>
                </Img_inner>
            </Img_con>

        </Col>
      ))}
    </Row>
  );
}




