import styled from 'styled-components'
import {useEffect} from 'react'
import {Box} from './Box'
import {Home} from  '@styled-icons/boxicons-regular/Home'
import {List} from  '@styled-icons/bootstrap/List'
import {Person} from '@styled-icons/bootstrap/Person'
import {Speakerphone} from '@styled-icons/heroicons-outline/Speakerphone'
import {useBotlink} from '../zustand/store.js'

const Foot_box = styled.div`
    background-color:white;
    width:100%;
    height:280px;
    display:flex;
    justify-content:center;
    border-top:1px solid lightgray;
    @media screen and (max-width: 800px) {
        display:none;
    }
`

const Foot_inner = styled.div`
    height:100%;
    min-width:800px;
    max-width: 1400px;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Footer_text_con = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Foot_box_m = styled.footer`
    display:none;
    @media screen and (max-width: 800px) {
        display: flex;
        width:100%;
        justify-content: center;
        color: #fff;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        background-color:white;
        border-top:1px solid lightgray;
        height:70px;
    }
`

const Button_foot = styled.button`

    border:none;
    width:100%;
    height:100%;
    padding:4px;
    margin:0;
    background-color:white;
    color: ${props => props.primary ? "#2073bc" : "gray"};
`

const Home_icon = styled(Home)`
  height:65%;
  width:100%;
`
const List_icon = styled(List)`

  height:65%;
  width:100%;
`
const Person_icon = styled(Person)`

  height:65%;
  width:100%;
`
const Notice_icon = styled(Speakerphone)`
  height:65%;
  width:100%;
`


const Home_text = styled.p`
    font-weight: bold;
`
const Text_footer = styled.p`
    color:gray;
`
const Text_last = styled.p`
    color:lightgray;
`
const Text_footer_info = styled.p`
`

const Footer_btn = styled.span`
    margin-left:20px;
    margin-right:20px;
`
const Footer_btn_box = styled.div`
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    a{
        color:gray;
        text-decoration-line: none;
    }
`

export function Footer(){
    const {link_state,set_home} = useBotlink(state => state)
    


    return(
        <>
        <Foot_box>
            <Foot_inner>
                <Footer_text_con>

                <Footer_btn_box><a href="/info">마커누 이용안내</a> <Footer_btn>|</Footer_btn> <a href="/pages/policy">이용약관</a> <Footer_btn>|</Footer_btn> <a href="/pages/privacy">개인정보처리방침</a></Footer_btn_box>

                <Text_footer_info>(주)네스타전화번호 : 070-7714-1314메일 : marconu@nesta.co.kr대표 : 조은제사업자등록번호:230-87-01450</Text_footer_info>
                    <Text_footer_info>주소 : 경기도 광명시 오리로 362, 607호통신판매업신고 : 2020-경기광명-0459개인정보보호책임자 : 조은제</Text_footer_info>
                    <Text_footer>(주)네스타는 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.</Text_footer>
                    <Text_last>© 주식회사 네스타 All Right Reserved</Text_last>
                </Footer_text_con>
            </Foot_inner>
        </Foot_box>

        <Foot_box_m>
            {[['홈',<Home_icon/>,'home','/'],['아이템',<List_icon/>,'item','/item'],['마이페이지',<Person_icon/>,'mypage','/mypage'],['공지사항',<Notice_icon/>,'notice','/notice']].map((placement, idx) => {
                if(link_state===placement[2]){
                    return(<Button_foot key={idx} primary>{placement[1]}<Home_text >{placement[0]}</Home_text></Button_foot>   );
                }
                else{
                    return(<Button_foot onClick={() => {document.location.href=placement[3]}} key={idx}>{placement[1]}<Home_text>{placement[0]}</Home_text></Button_foot>   );
                }
            })}
        </Foot_box_m>
        </>
    )
}



