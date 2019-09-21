import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import withFirebase from './firebase/withFirebase';
import Test from './pages/Test';
import Home from './pages/Home';

const APP_NAME = 'TD';

const App = () => {
  return (
    <NavigationDrawer
      toolbarTitle=""
      drawerTitle={APP_NAME}
      desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </NavigationDrawer>
  );
};

export default withFirebase(App);
