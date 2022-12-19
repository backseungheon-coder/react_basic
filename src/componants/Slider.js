import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import React, { useState } from 'react';
import banner1 from '../src/b1.jpg'
import banner2 from '../src/b2.jpg'
import banner3 from '../src/b3.jpg'
const Slider_img = styled.img`  
 
  height:400px;
  @media screen and (max-width: 800px) {
    width:100%;
    height:100%;
    object-fit:fill;
    filter: brightness(80%); 
    border-radius:10px;

  }
`
const Slider_box = styled.div`
@media screen and (max-width: 800px) {
  width:100%;
  height:160px;
}
`

const Carousel_box = styled.div`
display: none;
@media screen and (max-width: 800px) {
  display:inline;
  width:70%;
  min-width: 380px;
  max-width: 630px;
  margin-top:10px;
  border-radius:10px;
}
@media screen and (max-width: 380px) {
  min-width: 340px;
  max-width: 630px;
}
`



const Text_dark = styled.h5`
  font-weight: bold;
`

export default function Slider(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
      <>
      <Carousel_box>
        <Carousel>
              <Carousel.Item>
              <Slider_box>
                <Slider_img src={banner1}></Slider_img>
              </Slider_box>
              <Carousel.Caption>
              <Text_dark>중소기업의 영업, '스마랑'과 함께하세요.</Text_dark>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Slider_box>
              <Slider_img src={banner2}></Slider_img>
              <Carousel.Caption>
              <Text_dark>중소기업과 영업하는 긱워커를 연결합니다.</Text_dark>
              </Carousel.Caption>
              </Slider_box>
              </Carousel.Item>
              <Carousel.Item>
              <Slider_box>
              <Slider_img src={banner3}></Slider_img>
              </Slider_box>              
              <Carousel.Caption>
              <Text_dark>일반인도 교육받고 쉽게 참여할 수 있습니다.</Text_dark>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Carousel_box>
      </>
    );
  };