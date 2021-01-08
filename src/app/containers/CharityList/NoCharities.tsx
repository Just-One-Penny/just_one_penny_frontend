import React from 'react';
import styled from 'styled-components';
import { OneSvg } from 'app/components/OneSvg/Loadable';
import { Link } from 'react-router-dom';

export const NoCharities = () => {
  return (
    <Container>
      <OneSvg />
      <Header className="my-2">Sorry, no charities match your search.</Header>
      <div>
        <MainTextContainer>
          <Text className="mb-2">
            Was there a charity you were hoping to find in these results? We’re
            constantly expanding our offering of charities, but if there is a
            specific organization that you’d like to see on our platform please
            let them know that they should sign-up by sending them this{' '}
            <Link to="/charities/new">
              <TextLink>link.</TextLink>{' '}
            </Link>
          </Text>
        </MainTextContainer>
        <br></br>
        <Text className="mb-2">Search Selections:</Text>
        <br />
        <Text>
          <span className="mr-2">&#8226;</span>Check Your Spelling
        </Text>
        <br />
        <Text>
          <span className="mr-2">&#8226;</span>Try a different category
        </Text>
        <br />
        <Text>
          <span className="mr-2">&#8226;</span>Try other keywords that are
          similar in meaning
        </Text>
        <br />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

const MainTextContainer = styled.div`
  text-align: left;
`;

const Header = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const Text = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: center;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const TextLink = styled.span`
  color: #0a559e;
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #0c4379;
    text-decoration: underline;
  }
`;
