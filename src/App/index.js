import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import withFirebase from './firebase/withFirebase';
import NavItemLink from './components/NavItemLink';
import Test from './pages/Test';
import Home from './pages/Home';
import Charity from './pages/Charity';
import DiscoverCharity from './pages/DiscoverCharity';
import Donate from './pages/Donate';

const APP_NAME = 'TD Bank';

const navItems = [
  {
    label: 'Home',
    to: '/',
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
  const [getStated, setGetStarted] = useState(false);
  return (
    <BrowserRouter>
      <NavigationDrawer
        toolbarTitle={APP_NAME}
        drawerTitle="Signed in as Harvey Mertes"
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        navItems={navItems.map(props => (
          <NavItemLink {...props} key={props.to} />
        ))}
      >
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/charity"
            render={props => (
              <Charity
                {...props}
                getStated={getStated}
                setGetStarted={setGetStarted}
              />
            )}
          />
          <Route exact path="/discover-charity" component={DiscoverCharity} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
      </NavigationDrawer>
    </BrowserRouter>
  );
};

export default withFirebase(App);
