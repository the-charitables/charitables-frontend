import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import withFirebase from './firebase/withFirebase';
import NavItemLink from './components/NavItemLink';
import Test from './pages/Test';
import Home from './pages/Home';
import Charity from './pages/Charity';
import DiscoverCharity from './pages/DiscoverCharity';
import CharityForHomeless from './pages/CharityForHomeless';

const APP_NAME = 'TD Bank';

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
  },
  {
    label: 'TD for Charity',
    to: '/charity',
    exact: true,
    icon: 'layers'
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <NavigationDrawer
        toolbarTitle={APP_NAME}
        drawerTitle="Signed in as John Doe"
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        navItems={navItems.map(props => (
          <NavItemLink {...props} key={props.to} />
        ))}
      >
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Home} />
          <Route exact path="/charity" component={Charity} />
          <Route exact path="/discover-charity" component={DiscoverCharity} />
          <Route
            exact
            path="/charity4homeless"
            component={CharityForHomeless}
          />
        </Switch>
      </NavigationDrawer>
    </BrowserRouter>
  );
};

export default withFirebase(App);
