import React from 'react';
import { FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router';
import CharityItem from '../components/CharityItem';
import homelessness from '../../assets/homelessness.jpg';
import environment from '../../assets/environment.jpg';
import diseases from '../../assets/diseases.jpg';

const findCharities = 'Find charities';

const DiscoverCharity = ({ history }) => {
  const onClick = () => history.push('/charity4homeless');

  return (
    <>
      <TextField
        id="phone-number-with-icon-left"
        label="Discover charities"
        type="tel"
        leftIcon={<FontIcon>search</FontIcon>}
        size={10}
        fullWidth
      />
      <CharityItem
        title="Homelessness"
        subtitle="homeless description"
        imgSrc={homelessness}
        buttonText={findCharities}
        onClick={onClick}
      />
      <CharityItem
        title="Cancers and disease"
        subtitle="Cancers description"
        imgSrc={diseases}
        buttonText={findCharities}
        onClick={onClick}
      />
      <CharityItem
        title="Environment"
        subtitle="Environment description"
        imgSrc={environment}
        buttonText={findCharities}
        onClick={onClick}
      />
    </>
  );
};

export default withRouter(DiscoverCharity);
