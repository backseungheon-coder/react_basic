import {useEffect} from 'react';
import {useBotlink} from '../zustand/store'
export default function About(){

  const {set_notice} = useBotlink(state => state)
  
  useEffect(() => {
    set_notice()
  },[]);
    return (
        <>
            공지사항이 들어갈 페이지
        </>
    );
  };
  