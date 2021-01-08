import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../components/Modal';
import { CharityTerms } from '../../components/CharityTerms';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const InfoForCharities = () => {
  return (
    <Wrapper>
      <Header>Charities</Header>

      <SubHeading>Background Info</SubHeading>

      <Text>
        With the help of our nonprofit partners, we’re making it easier than
        ever for people of all generational backgrounds to give to the charities
        that make the world a better place. Use the following{' '}
        <Link to="/contactUs">
          <TextLink>contact form</TextLink>
        </Link>{' '}
        for any questions you have regarding Just One Penny’s charity
        partnerships.
      </Text>

      <SubHeading>Sign-up</SubHeading>

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
          modalBody={<CharityTerms />}
        />
        .
      </Text>

      <ButtonContainer>
        <Link to="/charities/new/form">
          <Button btnStyle="primary">Sign-up Today</Button>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Avenir;
  color: #333;
  background-color: #fff;
  padding: 2rem 3.5rem 12.8125rem 3.5rem;
  width: 40.8333%;
  margin-bottom: 3rem;

  @media only screen and (max-width: 1024px) {
    width: 55%;
  }

  @media only screen and (max-width: 768px) {
    width: 65%;
  }

  @media only screen and (max-width: 600px) {
    width: 75%;
  }

  @media only screen and (max-width: 475px) {
    width: 91.4666%;
    padding: 2rem 1rem;
  }
`;

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 4px;

  @media only screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 2rem;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
