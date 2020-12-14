import React from 'react';
import styled from 'styled-components';
import { OneSvg } from 'app/components/OneSvg/Loadable';

export const NoCharities = () => {
  return (
    <Container>
      <OneSvg />
      <Header className="my-2">
        You haven’t donated yet. Find a charity and start today.
      </Header>
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

const Header = styled.span`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;
