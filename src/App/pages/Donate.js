import React from 'react';
import { withRouter } from 'react-router';
import CharityItem from '../components/CharityItem';
import youthWithoutShelter from '../../assets/youth-without-shelter.jpg';

const buttonText = 'Learn more';

const CharityForHomeless = ({ history }) => {
  const onClick = () => history.push('/');
  return (
    <>
      <CharityItem
        title="Youth Without Shelter"
        subtitle="Youth Without Shelter (YWS) is an emergency residence and referral agency serving homeless youth. We are dedicated to providing shelter and support programs for homeless youth ages 16­-24."
        imgSrc={youthWithoutShelter}
        buttonText={buttonText}
        onClick={onClick}
      />
      <CharityItem
        title="Covenant House"
        subtitle="Opened in 1982, Covenant House Toronto was the second international site established in the highly recognized childcare agency. The 28-site network spans from Alaska to Latin America."
        imgSrc={youthWithoutShelter}
        buttonText={buttonText}
        onClick={onClick}
      />
      <CharityItem
        title="Raising the Roof"
        subtitle="Raising the Roof are a national leader in long-term solutions to ending homelessness. Each year, they support more than 50 community agencies across the country, and work together with partners in all sectors to address the issue."
        imgSrc={youthWithoutShelter}
        buttonText={buttonText}
        onClick={onClick}
      />
      <CharityItem
        title="Eva's Initiatives for Homeless Youth"
        subtitle="Eva's Initatives for Homeless Youth focus on meeting young people’s immediate needs at the same time that we provide skills, training, and support to help them build brighter futures."
        imgSrc={youthWithoutShelter}
        buttonText={buttonText}
        onClick={onClick}
      />
    </>
  );
};

export default withRouter(CharityForHomeless);
