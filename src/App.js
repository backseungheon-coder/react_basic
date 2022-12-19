
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
    </Basic_con>
  );
}



export default App;