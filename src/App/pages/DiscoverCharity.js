import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import {
  Button,
  Card,
  Media,
  TextField,
  FontIcon,
  List,
  ListItem
} from 'react-md';
import Search from '../components/Search';
import youthWithoutShelter from '../../assets/youth-without-shelter.jpg';

const findCharities = 'Find your charities';

const Header = styled.div``;

const StyledContainer = styled.div`
  padding: 10px;
`;

const CancerList = ({ onClick }) => (
  <List className="md-cell md-paper md-paper--1">
    <ListItem primaryText="Prostate Cancer Canada" onClick={onClick} />
    <ListItem primaryText="after BREAST CANCER" />
    <ListItem primaryText="Pancreatic Cancer Canada Foundation" />
  </List>
);

const MyList = () => (
  <List className="md-cell md-paper md-paper--1">
    <ListItem primaryText="Youth Without Shelter" />
    <ListItem primaryText="Prostate Cancer Canada" />
  </List>
);

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
            <TextField
              placeholder="Discover"
              value="Cancer"
              leftIcon={<FontIcon>search</FontIcon>}
              fullWidth={true}
            />
            <CancerList onClick={() => setSearch(false)} />
          </>
        ) : (
          <>
            <Header>My List</Header>
            <MyList />
            <ButtonContainer>
              <Button flat primary swapTheming onClick={() => {}}>
                Add Charities
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
