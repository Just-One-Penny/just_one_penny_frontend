import React from 'react';
import styled from 'styled-components';
import { OneSvg } from 'app/components/OneSvg/Loadable';

export const NoCharities = () => {
  return (
    <Container>
      <OneSvg />
      <Header>You haven’t donated yet. Find a charity and start today.</Header>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4.34375rem;
  padding-left 1.4375rem;
  padding-right: 1.5rem;
`;

const Header = styled.div`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;

  margin-top: 0.76rem;
`;
