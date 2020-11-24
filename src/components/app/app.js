import React from 'react';

import Desktop from '../desktop'
import {DesktopIconsServiceProvider} from '../../contexts/desktop-icons-service-context/desktop-icons-service-context';
import DesktopService from '../desktop/desktop-service';

const desktopService = new DesktopService()

import './app.css'

const App = () => {
  return(
    <div>
      <DesktopIconsServiceProvider value={desktopService}>
       <Desktop/>
      </DesktopIconsServiceProvider>
    </div>
  )
}

export default App;
