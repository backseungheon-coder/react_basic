import styled from 'styled-components'
import {Box} from './Box'

const Nav_box = styled.div`
    background-color:white;
    width:100%;
    height:80px;
    border-bottom:1px solid lightgray;
    display:flex;
    justify-content:center;
`

const Nav_inner = styled.div`
    height:100%;
    width:80%;
    background-color:gray;
`



export function Nav(){
    

    return(
        <Nav_box>
            <Nav_inner>
                
            </Nav_inner>
        </Nav_box>
    )
}