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

const Percentage = () => (
  <div>
    <div>
      Youth Without Shelter % <TextField placeholder="Discover" value={50} />
    </div>
    <div>
      Prostate Cancer Canada % <TextField placeholder="Discover" value={50} />
    </div>
  </div>
);

const STRING_ITEMS = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten'
];

const Donate = () => {
  const [checker1, setChekcer1] = useState(false);
  const [checker2, setChekcer2] = useState(false);
  const [checker3, setChekcer3] = useState(false);

  return (
    <StyledContainer>
      <h3>Balance this month: $10</h3>
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
        label="Strings"
        placeholder="Placeholder"
        className="md-cell"
        menuItems={STRING_ITEMS}
      />
      {checker1 && checker2 && <Percentage></Percentage>}
    </StyledContainer>
  );
};

export default Donate;
