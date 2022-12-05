import styled from 'styled-components'
import {Box} from './Box'

const Foot_box = styled.div`
    background-color:white;
    width:100%;
    height:90px;
    border-bottom:1px solid lightgray;
    display:flex;
    justify-content:center;
`

const Foot_inner = styled.div`
    height:100%;
    width:100%;
    background-color:gray;
`



export function Footer(){
    
    return(
        <Foot_box>
            <Foot_inner>

            </Foot_inner>
        </Foot_box>
    )
}


