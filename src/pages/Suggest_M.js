import {useEffect, useState} from 'react';
import {useBotlink} from '../zustand/store'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import {Contents_con,Contents_inner} from '../componants/Box'
import Table from '../componants/Table'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import{Link} from 'react-router-dom'
import { Search_input_from } from '../componants/Input_form';
import {useStore} from '../zustand/store.js'
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
    background-color:${props => props.Bgcolor};
    color:${props => props.fcolor};
    border-bottom:${props => props.boxborder};
    
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


            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="마케터 이름">
                <Form.Control type="text" placeholder="마케터 이름" />
              </FloatingLabel>
            </Col>

  </>
)
}





export default function Suggest_M(){

  const {set_none} = useBotlink(state => state)
  const {link,server_link,local_link} = useStore(state => state)
  const [Market_list,setMarket_list] = useState([])
  const [age,setage] = useState('')

  const [region,setregion] = useState('')
  const [plat,setplat] = useState('')
  const [parti,setparti] = useState('')

  const [career1,setcareer1] = useState('')
  const [career2,setcareer2] = useState('')
  const [career3,setcareer3] = useState('')


  const [job1,setjob1] = useState('')
  const [job2,setjob2] = useState('')
  const [job3,setjob3] = useState('')


  const job_cate = ['제조업','도매','서비스업','제품','개발','소프트웨어','금속','기계','건물','건설업','가공','전기','플라스틱','자동차','화물','통신','육류','운송업','의료','기타']
  const handleSearch = (e) => {

    
    axios.post("/api/smarang/M_get/",           {                
      "age":[age],
      "career":[String(Number(career1)+Number(career2)+Number(career3))],
      "plat":[plat],
      "region":region,
      "parti":parti,
      "job":[job1,job2,job3]
      })
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
                  <Nav_box to='/suggest_m' bgcolor="#ffffff" fcolor="#2073bc" boxborder='3px solid #2073bc'>마케터 AI검색</Nav_box>
                  <Nav_box to='/suggest_b' bgcolor="#ffffff" fcolor="gray" boxborder='3px solid lightgray'>브랜드 AI검색</Nav_box>
                </Nav_inner>


                <Contents_inner style={{paddingTop:'30px'}}>
                  <Detail_bottom_m1 open="open">
                      <Detail_summary >검색조건</Detail_summary>
                      

                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>

                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="나이">
                          <Form.Control type="text" placeholder="마케터 이름" value={age} onChange={(e) => {
                              setage(e.target.value)
                          }}/>
                        </FloatingLabel>
                      </Col>

                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="지역">
                        <Form.Select aria-label="Floating label select example"  onChange={(e) => {
                              setregion(e.target.value)
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
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>

                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="참여 형식">
                        <Form.Select aria-label="Floating label select example"  onChange={(e) => {
                              setparti(e.target.value)
                          }}>
                          <option></option>
                          <option value="전업">전업</option>
                          <option value="부업">부업</option>
                        </Form.Select>
                      </FloatingLabel>
                      </Col>



                        
                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="영업실적 (백만원)">
                          <Form.Control type="number" placeholder="마케터 이름" value={plat} onChange={(e) => {
                              setplat(e.target.value)
                          }}/>
                        </FloatingLabel>
                      </Col>
                      </Row>

                      경력1.
                        
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="직종">
                        <Form.Select aria-label="Floating label select example" >
                          <option></option>
                          <option value="1">경영&사무</option>
                          <option value="2">무역&소통</option>
                          <option value="2">영업</option>
                          <option value="2">영업관리&고객상담</option>
                          <option value="2">서비스</option>
                          <option value="2">마케팅/광고/홍보</option>
                          <option value="2">IT/인터넷</option>
                          <option value="2">디자인</option>
                          <option value="2">연구개발&설계</option>
                          <option value="2">생산&제조</option>
                        </Form.Select>
                      </FloatingLabel>
                      </Col>

                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="경력">
                          <Form.Control type="number" placeholder="마케터 이름" value={career1} onChange={(e) => {
                              setcareer1(e.target.value)
                          }}/>
                        </FloatingLabel>
                      </Col>


                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="회사업종">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => {
                          setjob1(e.target.value)
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
                      경력2.
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="직종">
                        <Form.Select aria-label="Floating label select example" >
                          <option></option>
                          <option value="1">경영&사무</option>
                          <option value="2">무역&소통</option>
                          <option value="2">영업</option>
                          <option value="2">영업관리&고객상담</option>
                          <option value="2">서비스</option>
                          <option value="2">마케팅/광고/홍보</option>
                          <option value="2">IT/인터넷</option>
                          <option value="2">디자인</option>
                          <option value="2">연구개발&설계</option>
                          <option value="2">생산&제조</option>
                        </Form.Select>
                      </FloatingLabel>
                      </Col>

                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="경력">
                          <Form.Control type="number" placeholder="마케터 이름" value={career2} onChange={(e) => {
                              setcareer2(e.target.value)
                          }}/>
                        </FloatingLabel>
                      </Col>


                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="회사업종">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => {
                          setjob2(e.target.value)
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
                      경력3.
                      <Row className="g-2" style={{marginTop:'2px',marginBottom:'2px'}}>
                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="직종">
                        <Form.Select aria-label="Floating label select example" >
                          <option></option>
                          <option value="1">경영&사무</option>
                          <option value="2">무역&소통</option>
                          <option value="2">영업</option>
                          <option value="2">영업관리&고객상담</option>
                          <option value="2">서비스</option>
                          <option value="2">마케팅/광고/홍보</option>
                          <option value="2">IT/인터넷</option>
                          <option value="2">디자인</option>
                          <option value="2">연구개발&설계</option>
                          <option value="2">생산&제조</option>
                        </Form.Select>
                      </FloatingLabel>
                      </Col>

                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="경력">
                          <Form.Control type="number" placeholder="마케터 이름" value={career3} onChange={(e) => {
                              setcareer3(e.target.value)
                          }}/>
                        </FloatingLabel>
                      </Col>


                      <Col md>
                      <FloatingLabel controlId="floatingSelect" label="회사업종">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => {
                          setjob3(e.target.value)
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

                        

                  </Detail_bottom_m1>
                  <Button_box>
                  <Search_button onClick={handleSearch}>검색</Search_button>
                  </Button_box>
                  
                  <Table Market_list={Market_list}/>


                  
                </Contents_inner>   

        </>
    );
  };
  