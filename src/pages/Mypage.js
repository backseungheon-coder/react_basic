import {useEffect} from 'react';
import {useBotlink} from '../zustand/store'
export default function About(){

  const {set_mypage} = useBotlink(state => state)
  
  useEffect(() => {
    set_mypage()
  },[]);
    return (
        <>
              마이페이지
        </>
    );
  };
  