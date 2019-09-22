import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Button, Media, TextField, FontIcon, List, ListItem } from 'react-md';
import CharityItem from '../components/CharityItem';
import youthWithoutShelter from '../../assets/youth-without-shelter.jpg';
import cancerImg from '../../assets/cancer.jpg';

const findCharities = 'Find your charities';

const Header = styled.h2`
  padding: 2px;
`;

const StyledContainer = styled.div`
  padding: 10px;
`;

const CancerList = ({ onClick }) => (
  // <List className="md-cell md-paper md-paper--1">
  //   <ListItem primaryText="Prostate Cancer Canada" onClick={onClick} />
  //   <ListItem primaryText="after BREAST CANCER" />
  //   <ListItem primaryText="Pancreatic Cancer Canada Foundation" />
  // </List>
  <>
    <CharityItem
      title="Prostate Cancer Canada"
      subtitle="Prostate Cancer Canada is the leading national foundation dedicated to the elimination of the most common cancer in men through research."
      onClick={onClick}
      buttonText="add"
      imgSrc={cancerImg}
    />
    <CharityItem
      title="after BREAST CANCER"
      subtitle="After Breast Cancer (ABC) is a registered charity that was founded in 2013 by Alicia Vianga, a certified bra and breast prosthesis fitter and owner of Premier Jour Fine Lingerie & Swimwear, a Toronto-based intimate apparel boutique."
      onClick={onClick}
      buttonText="add"
      imgSrc={cancerImg}
    />
    <CharityItem
      title="Pancreatic Cancer Canada Foundation"
      subtitle="Pancreatic Cancer Canada Foundation (PCC) is Canada’s only foundation dedicated to raising money and awareness for pancreatic cancer. PCC supports research into early detection, and effective treatment options."
      onClick={onClick}
      buttonText="add"
      imgSrc={cancerImg}
    />
  </>
);

const MyList = () => (
  <List className="md-cell md-paper md-paper--1">
    <ListItem primaryText="Youth Without Shelter" />
    <ListItem primaryText="Prostate Cancer Canada" />
  </List>
);

const ShorterTextField = styled(TextField)`
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const DiscoverCharity = ({ history }) => {
  const [canSearch, setSearch] = useState(true);
  return (
    <>
      <Media>
        <img src={youthWithoutShelter} />
      </Media>
      <StyledContainer>
        {canSearch ? (
          <>
            <Header>{findCharities}</Header>
            <ShorterTextField
              placeholder="Discover"
              value="Cancer"
              leftIcon={<FontIcon>search</FontIcon>}
              fullWidth={true}
            />
            <CancerList onClick={() => setSearch(false)} />
          </>
        ) : (
          <>
            <Header>My Charity List</Header>
            <MyList />
            <ButtonContainer>
              <Button flat primary swapTheming onClick={() => {}}>
                Add charities
              </Button>
              <Button
                flat
                primary
                swapTheming
                onClick={() => history.push('/donate')}
              >
                Next
              </Button>
            </ButtonContainer>
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default withRouter(DiscoverCharity);
