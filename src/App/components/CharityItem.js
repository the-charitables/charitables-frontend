import React from 'react';
import styled from 'styled-components';
import { Button, Card, CardTitle, Media, MediaOverlay } from 'react-md';

const StyledButtonContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: flex-end;
`;

const CharityItem = ({ title, subtitle, imgSrc, buttonText, onClick }) => (
  <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
    <Media>
      <img src={imgSrc} alt="image" />
      <MediaOverlay>
        <CardTitle title={title} subtitle={subtitle}></CardTitle>
      </MediaOverlay>
    </Media>
    <StyledButtonContainer>
      <Button flat primary swapTheming onClick={onClick}>
        {buttonText}
      </Button>
    </StyledButtonContainer>
  </Card>
);

export default CharityItem;
