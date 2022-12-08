import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import React, { useState } from 'react';

const Slider_box = styled.div`
  width:100vw;
  height:400px;
  background-color:lightgray;
  @media screen and (max-width: 800px) {
    width:100vw;
    height:200px;

  }
`

export default function Slider(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
      <>
        <Carousel>
              <Carousel.Item>
                <Slider_box></Slider_box>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Slider_box></Slider_box>
  
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Slider_box></Slider_box>
  
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </>
    );
  };