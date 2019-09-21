import React from 'react';
import CharityItem from '../components/CharityItem';

const CharityForHomeless = () => {
  const onClick = () => console.log();
  return (
    <>
      <CharityItem
        title="Youth Without Shelter"
        subtitle="homeless description"
        imgSrc={''}
        buttonText={'df'}
        onClick={onClick}
      />
      <CharityItem
        title="Youth Without Shelter"
        subtitle="homeless description"
        imgSrc={''}
        buttonText={'df'}
        onClick={onClick}
      />
      <CharityItem
        title="Covenant House"
        subtitle="homeless description"
        imgSrc={''}
        buttonText={'df'}
        onClick={onClick}
      />
      <CharityItem
        title="Raising the Roof"
        subtitle="homeless description"
        imgSrc={''}
        buttonText={'df'}
        onClick={onClick}
      />
      <CharityItem
        title="Eva's Initiatives for Homeless Youth"
        subtitle="homeless description"
        imgSrc={''}
        buttonText={'df'}
        onClick={onClick}
      />
    </>
  );
};

export default CharityForHomeless;
