import React from 'react';
import { connect } from 'react-redux';
import { get, sum } from 'lodash';
import { List, Subheader, Divider } from 'react-md';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 10px 5px 5px 5px;
`;

const Home = ({ donation }) => {
  return (
    <StyledContainer>
      <List className="md-cell md-paper md-paper--1">
        <Subheader primaryText="Recent transactions:" />
        <Divider />
        <Subheader primaryText={`Donation this month: $${donation}`} />
      </List>
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  const charities = get(state, 'firestore.ordered.charities');
  if (charities) {
    const balance0 = charities[0];
    const balance1 = charities[1];
    const donation = sum(balance0.balance) + sum(balance1.balance);

    return { donation };
  }
  return { donation: 0 };
};

export default connect(mapStateToProps)(Home);
