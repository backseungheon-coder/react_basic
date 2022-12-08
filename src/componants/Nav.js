import styled from 'styled-components'
import {Box} from './Box'
import Logo from '../src/logo-3.png'
import {Menu} from '@styled-icons/entypo/Menu'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Nav_box = styled.header`
    background-color:white;
    width:100%;
    height:80px;
    border-bottom:1px solid lightgray;
    display:flex;
    justify-content:center;
    z-index:20;
    @media screen and (max-width: 800px) {
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index:20;
    }
`


const Navigation = styled.nav`
    height:100%;
    min-width:800px;
    max-width: 1400px;
    width:70%;
    display:flex;
    @media screen and (max-width: 800px) {
        height:100%;
        min-width:350px;
        max-width: 600px;
        display:flex;
    }
`

const Nav_left = styled.li`
height:100%;
width:20%;
display:flex;
align-items:center;
@media screen and (max-width: 800px) {
    height:100%;
    width:50%;
    display:flex;
    align-items:center;
}
`

const Nav_mid = styled.li`
height:100%;
width:60%;
@media screen and (max-width: 800px) {
    display:none;
}
`

const Nav_right = styled.li`
display:flex;
height:100%;
min-width:20%;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 800px) {
    display:flex;
    height:100%;
    min-width:20%;
    width:50%;
    align-items:center;
    justify-content:flex-end;
}
`


const Logo_img = styled.img`
    min-width:200px;
    min-height:50px; 
    max-height: 60px;
    max-width: 210px;
    @media screen and (max-width: 800px) {
        min-width:160px;
        min-height:35px; 
    }
`

const Button_Signup = styled.button`
    height:55%;
    min-width:78px;
    width:48%;
    border:none;
    background-color:#2073bc;
    color:white;
    border-radius:10px;
    &:hover{
        color:lightgray;
        background-color:#185d99;   
    }
    @media screen and (max-width: 800px) {
        display:none;
    }
`

const Button_Login = styled.button`
    height:55%;
    min-width:78px;
    width:48%;
    border:none;
    background-color:#2073bc;
    color:white;
    border-radius:10px;
    &:hover{
        color:lightgray;
        background-color:#185d99;   
    }
    @media screen and (max-width: 800px) {
        display:none;
    }
    
    `




const Button_Login_vis = styled.button`

    width:100%;
    height:60px;
    border:none;
    background-color:#2073bc;
    color:white;
    border:1px solid white;
    &:hover{
        color:lightgray;
        background-color:#185d99;   
    }
    `


const Menu_icon = styled(Menu)`

  `

const Button_menu = styled.button`
    display:none;
    @media screen and (max-width: 800px) {
        display:block;
        border:none;
        background-color:#2073bc;
        border-radius:5px;
        min-height:50px;
        min-width:60px;
        color:white;
        &:hover{
            color:lightgray;
            background-color:#185d99;   
        }
    }

`

const Off_inner = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between
`

const Off_under = styled.div`

`

const Off_ul = styled.ul`
    padding:0;
`

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button_menu onClick={handleShow} className="me-2">
        <Menu_icon/>
        </Button_menu>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Off_inner>
                <Off_ul>
                    <li style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70px'}}>
                        <Logo_img src={Logo} />
                    </li>
                    <li>
                        <Button_Login_vis>로그인</Button_Login_vis>
                    </li>
                    <li>
                        <Button_Login_vis>회원가입</Button_Login_vis>
                    </li>
                </Off_ul>
                <Off_under>
                <Button_Login_vis onClick={handleClose}>닫기</Button_Login_vis>
                </Off_under>
                
            </Off_inner>
        </Offcanvas>
      </>
    );
  }

export function Nav(){
    
    return(
        <>
        <Nav_box>
                <Navigation>
                    <Nav_left><Link to={{pathname:`/`}}><Logo_img src={Logo} /></Link></Nav_left>
                    <Nav_mid></Nav_mid>
                    <Nav_right>
                        <Button_Login>로그인</Button_Login>
                        <Button_Signup>회원가입</Button_Signup>   
                        <OffCanvasExample  placement='end' name='end'/>
                    </Nav_right>
                </Navigation>
        </Nav_box>
      
        </>
    )
}