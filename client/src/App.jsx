import './App.css'
import { Router } from 'react-router'

import { useScreenSize } from './hooks/use-screen-size';
import Home from './pages/home';
import ControlPanel from './components/ControlPanel/ControlPanel';
import { useState } from 'react';

export let exportSetChangePanelState;

function App() {

  const { width, height } = useScreenSize();
  // const [changePanelState, setChangePanelState] = useState(true);
  const [changePanelState, setChangePanelState] = useState(false);

  exportSetChangePanelState = setChangePanelState;

  return (
      <div style={ { width: width < 800 ? width *90 /100 : width < 619 ? width *95 /100 : width *90 / 100 } } className='container-body'>
        {
          changePanelState 
          ? <Home/>
          : <ControlPanel/>
        }
      </div>
  );
}

export default App
