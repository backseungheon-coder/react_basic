import React, { useState,Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import banner1 from '../src/bg1.png'
import banner2 from '../src/bg2.png'
import banner3 from '../src/bg3.png'
import styled from 'styled-components';

const Image_size = styled.img`
  width:100%;
  border-radius: 20px;
`

const Button_next = styled.button`
  border-radius: 50%;
  background-color:black
`

const items = [
  {
    src: banner1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: banner2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src:banner3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if(nextIndex===0){
      args.setColorstate('#3c75bd');
      args.setnum_state(0)
    }
    else if(nextIndex===1){
      args.setColorstate('#2f5c9c');
      args.setnum_state(1)
    }
    else if(nextIndex===2){
      args.setColorstate('#674bb8');
      args.setnum_state(2)
    }
    
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);

    if(nextIndex===0){
      args.setColorstate('#3c75bd');
      args.setnum_state(0)
    }
    else if(nextIndex===1){
      args.setColorstate('#2f5c9c');
      args.setnum_state(1)
    }
    else if(nextIndex===2){
      args.setColorstate('#674bb8');
      args.setnum_state(2)
    }
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image_size src={item.src} alt={item.altText}/>
      </CarouselItem>
    );
  });

   const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
    };
    
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
 
  );
}

export default Example;