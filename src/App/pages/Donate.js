import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Divider,
  FontIcon,
  List,
  ListItem,
  ListItemControl,
  Checkbox,
  Subheader,
  Button,
  TextField,
  SelectField
} from 'react-md';

const StyledContainer = styled.div`
  padding: 10px 5px 5px 5px;
`;

const deleteIcon = <FontIcon key="chat">delete</FontIcon>;

const SmallerStyledContainer = styled.div`
  padding: 10px;
`;

const Percentage = () => (
  <SmallerStyledContainer>
    <TextField label="Youth Without Shelter %" value={50} />
    <TextField label="Prostate Cancer Canada %" value={50} />
  </SmallerStyledContainer>
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DonationAmount = () => (
  <>
    <SelectField
      id="select-field-card"
      label="Card"
      placeholder="Please select a card"
      className="md-cell"
      menuItems={['79***36 - Chequing', '04*************07 - Visa']}
    />
    <SmallerStyledContainer>
      {/* <TextField label="Amount" /> */}
      <ButtonContainer>
        <Button flat primary swapTheming>
          Donate
        </Button>
      </ButtonContainer>
    </SmallerStyledContainer>
  </>
);

const STRING_ITEMS = ['One time donation', 'Scheduled donation', 'Make change'];

const Donate = () => {
  const [checker1, setChekcer1] = useState(false);
  const [checker2, setChekcer2] = useState(false);
  const [checker3, setChekcer3] = useState(false);

  const [donationOption, setDonationOption] = useState(null);
  return (
    <StyledContainer>
      <h3>Donation this month: $10</h3>
      <List className="md-cell md-paper md-paper--1">
        <Subheader primaryText="My charities" />
        <ListItemControl
          rightIcon={deleteIcon}
          primaryAction={
            <Checkbox
              id="list-control-chat-1"
              name="list-control-primary"
              label="Youth Without Shelter"
              checked={checker1}
              onChange={() => setChekcer1(!checker1)}
            />
          }
        />
        <ListItemControl
          rightIcon={deleteIcon}
          primaryAction={
            <Checkbox
              id="list-control-chat-2"
              name="list-control-primary"
              label="Prostate Cancer Canada"
              checked={checker2}
              onChange={() => setChekcer2(!checker2)}
            />
          }
        />
        <Subheader primaryText="People" />
        <ListItemControl
          rightIcon={deleteIcon}
          primaryAction={
            <Checkbox
              id="list-control-chat-3"
              name="list-control-primary"
              label="John"
              checked={checker3}
              onChange={() => setChekcer3(!checker3)}
            />
          }
        />
      </List>
      <SelectField
        id="select-field-2"
        label="Donate options"
        placeholder="Choose how you want to donate"
        className="md-cell"
        menuItems={STRING_ITEMS}
        onChange={val => setDonationOption(val)}
        disabled={!checker1 && !checker2}
      />
      {donationOption && (
        <SmallerStyledContainer>
          Every time you make a purchase, it will around up to nearest dollar.
        </SmallerStyledContainer>
      )}
      {donationOption && checker1 && checker2 && <Percentage></Percentage>}
      {donationOption && <DonationAmount />}
    </StyledContainer>
  );
};

export default Donate;
