import React from 'react';

import Desktop from '../desktop'
import { DesktopIconsServiceProvider } from '../../contexts/desktop-icons-service-context/desktop-icons-service-context';
import DesktopService from '../desktop/desktop-service';

const desktopService = new DesktopService()


const App = () => {
  return (
    <div>
      <DesktopIconsServiceProvider value={desktopService}>
        <Desktop desktopService={desktopService} />
      </DesktopIconsServiceProvider>
    </div>
  )
}

export default App;
