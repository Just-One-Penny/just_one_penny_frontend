import React from 'react';
import styled from 'styled-components/macro';

import logo from './assets/image001.png';

export function Logo() {
  return (
    <Wrapper>
      <Title>
        <img src={logo} alt="Just One Penny" />
      </Title>
      {/* <Description>Charitable giving, a penny at a time</Description> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  text-align: center;
  height: 3rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
