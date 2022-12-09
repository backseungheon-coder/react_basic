import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import thum1 from '../src/thumnail/thum1.jpg'
import thum2 from '../src/thumnail/thum2.jpg'
import thum3 from '../src/thumnail/thum3.jpg'
import thum4 from '../src/thumnail/thum4.jpg'
import thum5 from '../src/thumnail/thum5.jpg'
import thum6 from '../src/thumnail/thum6.jpg'
import thum7 from '../src/thumnail/thum7.jpg'
import thum8 from '../src/thumnail/thum8.jpg'
import thum9 from '../src/thumnail/thum9.jpg'

const Img_con= styled.div`
    // background-color:gray;
    width:90%;
    height: 380px;
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
        border:none; 
        justify-content: space-between;
        }

`

const Img_box = styled.img`
    width:100%;
    height:60%;
    background-color:lightgray;
    @media screen and (max-width: 800px) {
        width:45%;
        height:100%;
        border-radius:10px;

        }
`

const Img_info = styled.div`
    width:100%;
    height:40%;
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
    height:45%;
    padding-top:10px;
    font-size:18px;
    padding-left:6px;
    padding-right:6px;
    @media screen and (max-width: 800px) {
        padding-top:0;
        font-size:16px;  
        height:40%;   
        }
    @media screen and (max-width: 380px) {
            font-size:14px;   
        }
`

const Text_bot = styled.div`
    width:100%;
    height:35%;
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
    @media screen and (max-width: 380px) {
        font-size:12px;   
      }
`



// var list = [['홈',<Home_icon/>,'home','/'],['아이템',<List_icon/>,'item','/item'],['마이페이지',<Person_icon/>,'mypage','/mypage'],['공지사항',<Notice_icon/>,'notice','/notice']]
var list = [[thum1,'[경정청구] 최근 5년 지급한 세금 환급'],[thum2,`네이버 플랫폼, '네이버주문' 가맹점 유치 영업`],[thum3,`전기요금 절감 컨설팅 솔루션(소개)`],[thum4,`초음파 식기세척기(업소용)`],[thum5,`국내/국회 규격인증(KC인증등)`],[thum6,`[코로나19 확산방지]안심콜 출입관리 서비스`],[thum7,`[코로나19 필수아이템] 전자출입명부용 테블릿 + 스탠드형...`],[thum8,`코로나19 방역 항바이러스/향균 표면코팅`],[thum9,`[제품] 천연유래성분 구강청결제 더콘가글`]]


var list = [[thum1,'[경정청구] 최근 5년 지급한 세금 환급'],[thum3,`전기요금 절감 컨설팅 솔루션(소개)`],[thum4,`초음파 식기세척기(업소용)`],[thum5,`국내/국회 규격인증(KC인증등)`],[thum6,`[코로나19 확산방지]안심콜 출입관리 서비스`],[thum7,`[코로나19 필수아이템] 전자출입명부용... `],[thum8,`코로나19 방역 항바이러스/향균 표면코팅`],[thum9,`[제품] 천연유래성분 구강청결제 더콘가글`]]

export default function Basic_Card() {
  return (
    <Row xs={1} md={4} className="g-4">
      {list.map((thum, idx) => (
        <Col key={idx}>
            <Img_con>
                <Img_inner>
                    <Img_box src={thum[0]}>

                    </Img_box>
                    <Img_info>
                        <Text_header><Cate_div>프리마케터</Cate_div></Text_header>
                        <Text_mid>{thum[1]}</Text_mid>
                        <Text_bot>판매 금액의 20% 부터</Text_bot>
                    </Img_info>
                </Img_inner>
            </Img_con>

        </Col>
      ))}
    </Row>
  );
}


export function Card_main() {
    return (
        <Row xs={1} md={4} className="g-4">
          {list.map((thum, idx) => (
            <Col key={idx}>
                <Img_con>
                    <Img_inner>
                        <Img_box src={thum[0]}>
    
                        </Img_box>
                        <Img_info>
                            <Text_header><Cate_div>프리마케터</Cate_div></Text_header>
                            <Text_mid>{thum[1]}</Text_mid>
                            <Text_bot>판매 금액의 20% 부터</Text_bot>
                        </Img_info>
                    </Img_inner>
                </Img_con>
    
            </Col>
          ))}
        </Row>
      );

}

