import React from 'react';
import { FontIcon, TextField } from 'react-md';
import CharityItem from '../../components/CharityItem';
import homelessness from '../../../assets/homelessness.jpg';

const DiscoverCharity = () => {
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
      />
    </>
  );
};

export default DiscoverCharity;
