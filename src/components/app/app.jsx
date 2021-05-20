import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Desktop from '../desktop';
import Adminpractice from '../modules/adminpractice.jsx'
import Koatuu from '../modules/koatuu.jsx'

import { DesktopIconsServiceProvider } from '../../contexts/desktop-icons-service-context/desktop-icons-service-context';
import DesktopService from '../desktop/desktop-service';

const desktopService = new DesktopService()

const App = () => {
  return (
    <Router>
      <div>
        <DesktopIconsServiceProvider value={desktopService}>
          <Switch>
            <Route exact path="/desktop">
              <Desktop desktopService={desktopService} />
            </Route>

            <Route path="/application/module/address/Koatuu.js" component={Koatuu}/>
            <Route path="/workstation/adminpractice" component={Adminpractice} />

          </Switch>
        </DesktopIconsServiceProvider>
      </div>
    </Router>

  )
}

export default App;
