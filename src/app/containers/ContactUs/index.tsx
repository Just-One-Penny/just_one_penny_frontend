/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Button } from '../../components/Button';
import { contactUsApi } from '../../../api/contactUsApi';
import { HeroSection } from '../../components/HeroSection';
import { ReactComponent as Checkmark } from './assets/IconCheckmark.svg';
import { ReactComponent as ButtonClear } from './assets/ButtonClear.svg';

interface Props {}

export const ContactUs = memo((props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSubmitted(true);
    contactUsApi.postEmail({
      name: name,
      email: email,
      organization: organization,
      messageBody: message,
    });
    return 1;
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Description of ContactUs" />
      </Helmet>
      <HeroSection />

      <Container>
        <MainBox>
          <PageHeading>Contact</PageHeading>
          <B1>
            For partnership inquiries, questions regarding your account or a
            past transaction, or for any other help, please fill out the
            following contact form and we’ll get back to you as soon as we can.
          </B1>
          {!submitted ? (
            <FormBox>
              <form id="contact-us" method="POST" onSubmit={handleSubmit}>
                <FormFieldContainer>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    name="name"
                    type="text"
                    value={name}
                    placeholder="First and Last Name"
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </FormFieldContainer>

                <FormFieldContainer>
                  <Label htmlFor="inputEmail">Email</Label>
                  <Input
                    name="inputEmail"
                    type="email"
                    value={email}
                    placeholder="email@example.com"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </FormFieldContainer>

                <FormFieldContainer>
                  <Label htmlFor="organization">Organization (optional)</Label>
                  <Input
                    name="organization"
                    type="name"
                    value={organization}
                    placeholder="Organization Name"
                    onChange={e => setOrganization(e.target.value)}
                  />
                </FormFieldContainer>

                <FormFieldContainer>
                  <Label htmlFor="messageBody">Message</Label>
                  <Textarea
                    name="messageBody"
                    value={message}
                    placeholder="How can we help?"
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </FormFieldContainer>

                <ButtonWrapper>
                  <Button width={188} btnStyle={'primary'}>
                    Send Message
                  </Button>
                </ButtonWrapper>
              </form>
            </FormBox>
          ) : (
            <SubmitContainer>
              <SubmissionText>
                {/* <span>
                  <Checkmark />
                </span> */}
                Message Sent. We'll get back to you soon.
              </SubmissionText>

              {/* <span>
                <ButtonClear />
              </span> */}
            </SubmitContainer>
          )}
        </MainBox>
      </Container>
    </>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 3rem 2.5rem;

  @media only screen and (max-width: 475px) {
    padding: 1.5rem 1rem;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: column;
  // width: 36.6666666%;
  max-width: 44rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 1.75rem 4rem 7.5rem 4rem;

  @media only screen and (max-width: 650px) {
    padding: 1.25rem 2rem 1.5rem 2rem;
  }

  @media only screen and (max-width: 475px) {
    width: 100%;
    padding: 1.25rem 0.6875rem 1.5rem 0.75rem;
  }
`;

const PageHeading = styled.div`
  flex-direction: row;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-42)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 28px/42px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin-bottom: 1.375rem;

  @media only screen and (max-width: 475px) {
    margin-bottom: 0.875rem;
  }
`;

const B1 = styled.p`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin-bottom: 1.625rem;

  @media only screen and (max-width: 475px) {
    margin-bottom: 1.125rem;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: stretch;
  margin: 0 3.5rem;

  @media only screen and (max-width: 650px) {
    margin: 0 1.75rem;
  }

  @media only screen and (max-width: 475px) {
    margin: 0 0.25rem;
  }
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.125rem;
`;

const Label = styled.label`
  width: 100%;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const Input = styled.input`
  border: 1px solid var(---9fa2a8-mid);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #9fa2a8;
  padding: 0.375rem 0 0.25rem 0.9375rem;
  border-radius: 5px;
  opacity: 1;
  color: #333;

  &::placeholder {
    color: #333333;
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid var(---9fa2a8-mid);

  padding-bottom: 5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #9fa2a8;
  border-radius: 5px;
  opacity: 1;

  padding: 0.375rem 0 7.75rem 0.9375rem;

  &::placeholder {
    color: #333333;
    font-size: 1rem;
    font-weight: normal;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
`;

const SubmitContainer = styled.div`
  background: transparent linear-gradient(90deg, #005799 0%, #6996fd 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 8px;

  padding: 0.75rem 0 0.5625rem 4rem;

  @media only screen and (max-width: 650px) {
    padding: 0.5rem 0 0.625rem 3rem;
  }

  // & span {
  //   & svg {
  //     fill: transparent;
  //   }
  // }
`;

const SubmissionText = styled.p`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  @media only screen and (max-width: 650px) {
    font-size: 1rem;
  }
`;
