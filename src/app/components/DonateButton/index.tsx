/**
 *
 * DonateButton
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Modal } from '../Modal';

interface Props {}

export function DonateButton(props: Props) {
  return (
    <Modal
      buttonElement={<Div>Donate</Div>}
      modalBody={<>HI</>}
      modalTitle="Donate"
    />
  );
}

const Div = styled.div`
  cursor: pointer;
  height: 50px;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent
    linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-16) / 22px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 900 16px/22px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
`;
