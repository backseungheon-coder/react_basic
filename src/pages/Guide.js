import {useEffect} from 'react';
import {useBotlink} from '../zustand/store'
export default function Guide(){

  const {set_mypage} = useBotlink(state => state)
  
  useEffect(() => {
    set_mypage()
  },[]);
    return (
        <>
              추천
        </>
    );
  };
  