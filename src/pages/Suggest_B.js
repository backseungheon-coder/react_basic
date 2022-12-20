
import {useBotlink} from '../zustand/store'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import {Contents_con,Contents_inner} from '../componants/Box'
import {Table_Brand} from '../componants/Table'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import{Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios'

const Detail_bottom_m1 = styled.details`
    width:100%;
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
    ::marker {
      position:right;
    }
`

const Nav_inner = styled.div`
    min-width:800px;
    max-width: 1400px;
    width:70%;
    display:flex;
    height:80px;
    @media screen and (max-width: 800px) {
    
      min-width: 370px;
  max-width: 630px;
    
    }

    
`
const Nav_box = styled(Link)`
    width: 50%;
    height:100%;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    background-color:${props => props.BgColor};
    color:${props => props.fColor};
    border-bottom:${props => props.Border};
    
`

const Button_box = styled.div`
  width: 100%;
  height: 60px;

`


const Search_button = styled.button`
    width: 100%;
    height: 40px;
    background-color:#2073bc;
    color:white;
    border:none;
    border-radius:10px;
`

function Floating_labe() {

return(
  <>

      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="마케터 이름">
                <Form.Control type="text" placeholder="마케터 이름" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="지역"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>지역</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
  </>
)
}


export default function Suggest_B(){
  const [Market_list,setMarket_list] = useState([])
  const {set_none} = useBotlink(state => state)

  const [much,setMuch] = useState('')
  const [pmmuch,setpmuch] = useState('')
  const [credit,setCredit] = useState('')
  const [peop,setPeop] = useState('')
  const [date,setdate] = useState('')
  const [indus,setIndus] = useState('')
  const [addr,setAddr] = useState('')


  const job_cate = ['제조업','도매','서비스업','제품','개발','소프트웨어','금속','기계','건물','건설업','가공','전기','플라스틱','자동차','화물','통신','육류','운송업','의료','기타']
  

  const handleSearch = (e) => {

    
    axios.post("http://43.200.140.62:8000/api/smarang/B_get/",                     
      {                
        "매출액(억)":[String(much)],
        "영업이익(억)":[String(pmmuch)],
        "신용등급_점수":[String(credit)],
        "사원수(명)":[String(peop)],
        "설립일(년)":[String(date)],
        "industry":[indus],
        "addr":addr
      }
      )
      .then(function (response) {
        setMarket_list([...response.data])
      }).catch(function (error) {
          // 오류발생시 실행
      }).then(function() {
          // 항상 실행
      });    
  }



  useEffect(() => {
    set_none()
  },[]);
    return (
        <>

                <Nav_inner>
                  <Nav_box to='/suggest_m' BgColor="#ffffff" fColor="gray" Border='3px solid lightgray'>마케터 AI검색</Nav_box>
                  <Nav_box to='/suggest_b' BgColor="#ffffff" fColor="#2073bc" Border='3px solid #2073bc'>브랜드 AI검색</Nav_box>
                </Nav_inner>

                <Contents_inner style={{paddingTop:'30px'}}>
                  <Detail_bottom_m1 open="open">
                      <Detail_summary >검색조건</Detail_summary>
                      
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                        <Col md>
                          <FloatingLabel controlId="floatingInputGrid" label="매출액(억)">
                            <Form.Control type="number" placeholder="마케터 이름" value={much} onChange={(e) => {setMuch(e.target.value)}}/>
                          </FloatingLabel>
                        </Col>
                        <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="영업이익(억)">
                            <Form.Control type="number" placeholder="마케터 이름" value={pmmuch} onChange={(e) => {setpmuch(e.target.value)}}/>
                          </FloatingLabel>
                        </Col>
                      </Row>


                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                        <Col md>
                          <FloatingLabel controlId="floatingInputGrid" label="신용등급 점수">
                            <Form.Control type="number" placeholder="마케터 이름" value={credit} onChange={(e) => {setCredit(e.target.value)}}/>
                          </FloatingLabel>
                        </Col>
                        <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="사원수(명)">
                            <Form.Control type="number" placeholder="마케터 이름" value={peop} onChange={(e) => {setPeop(e.target.value)}}/>
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                        <Col md>
                          <FloatingLabel controlId="floatingInputGrid" label="설립년도 4자리 입력">
                            <Form.Control type="number" placeholder="마케터 이름" value={date} onChange={(e) => {setdate(e.target.value)}}/>
                          </FloatingLabel>
                        </Col>
                        <Col md>
                      <FloatingLabel controlId="floatingSelect" label="업종">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => {
                          setIndus(e.target.value)
                        }}>
                          <option></option>
                          {job_cate.map((data, idx) => (
                          <>
                            <option key={idx} value={data}>{data}</option>
                          </>
                          ))} 
                        </Form.Select>
                      </FloatingLabel>
                      </Col>
                      </Row>
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>

                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="지역">
                        <Form.Select aria-label="Floating label select example"  onChange={(e) => {
                              setAddr(e.target.value)
                          }}>
                          <option></option>
                          <option value="서울">전체</option>
                          <option value="경기">경기</option>
                          <option value="서울">서울</option>
                          <option value="인천">인천</option>
                          <option value="강원">강원</option>
                          <option value="충북">충북</option>
                          <option value="충남">충남</option>
                          <option value="경북">경북</option>
                          <option value="경남">경남</option>
                          <option value="전북">전북</option>
                          <option value="대전">대전</option>
                          <option value="광주">광주</option>
                          <option value="대구">대구</option>
                          <option value="울산">울산</option>
                          <option value="부산">부산</option>
                        </Form.Select>
                      </FloatingLabel>
                      </Col>
                      </Row>

                      


                  </Detail_bottom_m1>


                  <Button_box>
                  <Search_button onClick={handleSearch}>검색</Search_button>
                  </Button_box>

                  <Table_Brand Market_list={Market_list}></Table_Brand>


                  
                </Contents_inner>   

        </>
    );
  };
  