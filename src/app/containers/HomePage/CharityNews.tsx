import React from 'react';
import styled from 'styled-components/macro';
import { NewsFeed } from '../NewsFeed';

export const CharityNews = () => {
  return (
    <Container>
      <H2>Charity News</H2>
      <CharitiesContainer>
        <NewsFeed />
      </CharitiesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: #f2f2f2 0% 0% no-repeat padding-box;

  @media only screen and (max-width: 475px) {
  }
`;

const H2 = styled.h2`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-42)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 28px/42px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const CharitiesContainer = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (max-width: 475px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
