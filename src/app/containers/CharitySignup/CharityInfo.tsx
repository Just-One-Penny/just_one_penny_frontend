import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../components/Modal';
import { TermsOfService } from '../../components/TermsOfService';
import { Button } from '../../components/Button';

export const InfoForCharities = () => {
  return (
    <Wrapper>
      <Header>Info for Charities</Header>

      <SubHeading className="mt-4 mb-1">Questions</SubHeading>

      <Text>
        With the help of our nonprofit partners, we’re making it easier than
        ever for people of all generational backgrounds to give to the charities
        that make the world a better place. Use the following{' '}
        <Modal
          buttonElement={<TextLink>contact form</TextLink>}
          modalBody={<TermsOfService />}
        />{' '}
        for any questions you have regarding Just One Penny’s charity
        partnerships.
      </Text>

      <SubHeading className="mt-4 mb-1">Sign-up</SubHeading>

      <Text>
        We welcome all charities to utilize our platform and begin their
        micro-donation journey. Signing up takes less than 5 minutes, and any
        501(c)(3) nonprofit organization is qualified to join.*
        <br />
        <br />
        Once you sign up, we’ll take your information and create a custom
        profile that will allow donors to learn more about you and establish
        single-time and recurring donations to your charity. Your organization
        will then show up in search results on our platform, and donors from
        across the country will be able to support you.
        <br />
        <br />
        *Pursuant to our{' '}
        <Modal
          buttonElement={<TextLink>Terms and Conditions</TextLink>}
          modalBody={<TermsOfService />}
        />
        .
      </Text>

      <ButtonContainer>
        <Button btnStyle="primary">Sign-up Today</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Avenir;
  color: #333;
`;

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
`;

const Text = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
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

const ButtonContainer = styled.div``;
