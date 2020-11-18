import React from 'react';
import styled from 'styled-components/macro';

import logo from './assets/image001.png';

export function Logo() {
  return (
    <Wrapper>
      <Title>
        <a href="/">
          <img src={logo} alt="Just One Penny" />
        </a>
      </Title>
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
  color: ${p => p.theme.colors.dark[900]};
  font-weight: bold;
  text-align: center;
  height: 3rem;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.colors.light[200]};
  font-weight: normal;
`;
