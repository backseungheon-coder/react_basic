
import {useState} from 'react';
import {useStore} from './zustand/store.js'
import GlobalStyle from './styles/Globalstyle';
import Router from './Router.js';

function App() {
  const {link,server_link,local_link} = useStore(state => state)
  
  return (
    <div className="App">
      <Router/>
      <GlobalStyle/>
      <p>{link}</p>
      <button onClick={local_link}>로컬 링크</button>
      <button onClick={server_link}>서버 링크</button>
    </div>
  );
}

export default App;
