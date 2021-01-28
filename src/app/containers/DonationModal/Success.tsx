import { Button } from 'app/components/Button';
import React from 'react';
import styled from 'styled-components/macro';

export const Success = props => {
  return (
    <Wrapper>
      <Header>{props.amount ? props.amount : '$0'}</Header>
      <ModalContent>
        <div className="flex w-full justify-center align-center my-5">
          <SuccessText>
            Thank you for donating to Charity Organization Name
          </SuccessText>
        </div>
        <div className="mb-3">
          <InfoText>Date: {props.dateSent}</InfoText>
          <InfoText>Name: {props.name}</InfoText>
          <InfoText>Email: {props.email}</InfoText>
          <InfoText>Donation: {props.amount}</InfoText>
          <InfoText>Total Amount: {props.total}</InfoText>
          <InfoText>
            Card #: Ending in {props.token ? props.token.card.last4 : ''}
          </InfoText>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <LinkText>Print Confirmation</LinkText>
          <Button btnStyle="primary" className="mt-2" onClick={props.hide}>
            Finish
          </Button>
        </div>
      </ModalContent>
    </Wrapper>
  );
};

const Header = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #11569b;
  height: 5rem;
  width: 100%;
  text-align: center;
  font: normal normal 900 70px/96px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const ModalContent = styled.div`
  padding: 2rem;
  width: 100%;
`;

const SuccessText = styled.span`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const InfoText = styled.div`
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
`;

const LinkText = styled.span`
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/22px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
