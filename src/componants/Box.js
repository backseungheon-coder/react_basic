import styled from "styled-components";

export const Box = styled.div`
height: ${({Size}) => 
Size === 'Small' && '100px' ||
Size === 'Large' && '500px' || 
Size === 'inner' && '100%' || 
'50px'

};

width: ${({Size}) => 
Size === 'Small' && '100px' || 
Size === 'Large' && '500px' || 
Size === 'inner' && '80%' || 
'50px'
};

background-color: ${({bgc}) => bgc };
`;



export const Basic_con = styled.div`
height: 100%;
width: 100%;
`
export const Contents_inner =  styled.div`
  min-width:800px;
  max-width: 1400px;
  width:70%;
  min-height:92vh;
  height:auto;
  @media screen and (max-width: 800px) {
    min-height:92vh;
    min-width: 380px;
    max-width: 630px;
    height:auto;

  }

`


export const Contents_con =  styled.div`
  
  width: 100%;
  height:auto;
  display:flex;
  align-items:center;
  flex-direction:column;
  @media screen and (max-width: 800px) {
    padding-top:80px;
    padding-bottom:70px;
  }

  
`

// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

