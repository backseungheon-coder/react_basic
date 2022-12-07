
import {useState} from 'react';
import {useStore} from './zustand/store.js'
import GlobalStyle from './styles/Globalstyle';
import Router from './Router.js';
import {Basic_con} from './componants/Box'
import {Nav} from './componants/Nav'


function App() {
  const {link,server_link,local_link} = useStore(state => state)
  
  
  
  return (
    <Basic_con className="App">
      <GlobalStyle/>
      <Nav/>
      <Router>
      </Router>
      {/* <p>{link}</p>
      <button onClick={local_link}>로컬 링크</button>
      <button onClick={server_link}>서버 링크</button> */}
    </Basic_con>
  );
}



export default App;
                                                                                                