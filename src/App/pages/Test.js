import React from 'react';
import { Button } from 'react-md';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
`;
const onClick = () => console.log('button is clicked');

const Test = () => {
  return (
    <StyledContainer>
      <h3>Test page</h3>
      <Button raised onClick={onClick}>
        Hello, World!
      </Button>
    </StyledContainer>
  );
};

export default Test;
