import React from 'react';
import { connect } from 'react-redux';
import { get, sum } from 'lodash';
import { List, Subheader, Divider } from 'react-md';
import styled from 'styled-components';
import moment from 'moment';

const StyledContainer = styled.div`
  padding: 10px 5px 5px 5px;
`;

const timeSort = (a, b) => {
  return a.time - b.time;
};

const TransactionBox = styled.div`
  padding: 5px 40px;
`;

const TransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: larger;
  padding: 5px 0px;
`;

const TimeContainer = styled.div`
  font-size: smaller;
`;

const Home = ({ donation, transactions }) => {
  let actualTransactions = [];
  if (transactions && transactions.length) {
    actualTransactions = transactions.sort(timeSort);
    console.log('actualTransactions', actualTransactions);
  }

  return (
    <StyledContainer>
      <List className="md-cell md-paper md-paper--1">
        <Subheader primaryText="Recent transactions:" />
        {actualTransactions.map(transaction => (
          <TransactionBox key={transaction.id}>
            <TransactionContainer>
              <div>{transaction.name}</div> <div>${transaction.money}</div>
            </TransactionContainer>
            <TimeContainer>
              {moment(transaction.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}
            </TimeContainer>
          </TransactionBox>
        ))}
        <Divider />
        <Subheader primaryText={`Donation this month: $${donation}`} />
      </List>
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  const transactions = get(state, 'firestore.ordered.transactions');
  console.log('transactions', transactions);
  if (transactions && Array.isArray(transactions) && transactions.length) {
    const donation = sum(
      transactions
        .filter(transaction => transaction.name !== 'Starbucks')
        .map(transaction => transaction.money)
    );
    console.log('donation is', donation);
    return { donation, transactions };
  }

  return { donation: 0, transactions: [] };
};

export default connect(mapStateToProps)(Home);
