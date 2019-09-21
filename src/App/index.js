import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import withFirebase from './firebase/withFirebase';
import NavItemLink from './components/NavItemLink';
import Test from './pages/Test';
import Home from './pages/Home';

const APP_NAME = 'TD';

const navItems = [
  {
    label: 'Home',
    to: '/home',
    exact: true,
    icon: 'home'
  },
  {
    label: 'My Account',
    to: '/account',
    exact: true,
    icon: 'account_balance_wallet'
  },
  {
    label: 'Transfers',
    to: '/transfer',
    exact: true,
    icon: 'payment'
  },
  {
    label: 'Investing',
    to: '/invest',
    exact: true,
    icon: 'account_balance'
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <NavigationDrawer
        toolbarTitle=""
        drawerTitle={APP_NAME}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        navItems={navItems.map(props => (
          <NavItemLink {...props} key={props.to} />
        ))}
      >
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Home} />
        </Switch>
      </NavigationDrawer>
    </BrowserRouter>
  );
};

export default withFirebase(App);
