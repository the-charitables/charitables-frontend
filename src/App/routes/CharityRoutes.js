import React from 'react';
import { Route } from 'react-router-dom';
import Charity from '../pages/Charity';
import DiscoverCharity from '../pages/DiscoverCharity';
import CharityForHomeless from '../pages/CharityForHomeless';

const CharityRoutes = () => {
  return (
    <>
      <Route exact path="/charity" component={Charity} />
      <Route exact path="/discover-charity" component={DiscoverCharity} />
      <Route exact path="/charity4homeless" component={CharityForHomeless} />
    </>
  );
};

export default CharityRoutes;
