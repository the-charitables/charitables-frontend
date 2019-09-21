import React from 'react';
import styled from 'styled-components';

import DiscoverCharity from '../DiscoverCharity';

const StyledContainer = styled.div`
  padding: 10px;
`;

const Charity = () => {
  return (
    <StyledContainer>
      <DiscoverCharity />
    </StyledContainer>
  );
};

export default Charity;
