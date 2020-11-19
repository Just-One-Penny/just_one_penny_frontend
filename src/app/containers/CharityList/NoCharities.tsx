import React from 'react';
import styled from 'styled-components';
import { OneSvg } from 'app/components/OneSvg/Loadable';

export const NoCharities = () => {
  return (
    <>
      <OneSvg />
      <Header>Sorry, no charities match your search.</Header>
    </>
  );
};

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
