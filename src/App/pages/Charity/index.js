import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Button, CardTitle, CardText, Media } from 'react-md';
import charitable from '../../../assets/charitable.jpg';

const CenteredContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const Charity = ({ history, getStated, setGetStarted }) => {
  const onClick = () => {
    setGetStarted(true);
    history.push('/discover-charity');
  };

  return (
    <>
      <Media>
        <img src={charitable} />
      </Media>
      <CardTitle title="Meet Charitable" subtitle="" />
      <CardText>
        <p>
          Charitable is an innovative way of giving, that focuses on community
          development via everyday bank transactions.Get started to learn more.
        </p>
        <CenteredContainer>
          {getStated ? (
            <ButtonContainer>
              <Button flat primary swapTheming onClick={onClick}>
                Find new charities
              </Button>
              <Button
                flat
                primary
                swapTheming
                onClick={() => history.push('/donate')}
              >
                Donate
              </Button>
            </ButtonContainer>
          ) : (
            <Button flat primary swapTheming onClick={onClick}>
              Get started
            </Button>
          )}
        </CenteredContainer>
      </CardText>
    </>
  );
};

export default withRouter(Charity);
