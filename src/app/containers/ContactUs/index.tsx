/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Button } from '../../components/Button';

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
    return 1;
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Description of ContactUs" />
      </Helmet>
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
                    required
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
                <Button btnStyle={'primary'}>Submit</Button>
              </form>
            </FormBox>
          ) : (
            <SubmitContainer>
              Message Sent. We'll get back to you soon.
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
  padding-bottom: 10px;
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 704px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;

  @media (min-width: 476px) {
    padding: 1rem;
    margin: 1rem;
  }

  @media (max-width: 475px) {
    padding: 1rem;
    margin: 1rem;
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
  padding: 0.3rem 0;

  @media (max-width: 475px) {
  }

  @media (min-width: 476px) {
  }
`;

const B1 = styled.b`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  padding-bottom: 0.5rem;

  @media (min-width: 476px) {
    text-align: left;
  }

  @media (max-width: 475px) {
    text-align: left;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: stretch;
  @media (min-width: 476px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }
`;

// const Button = styled.button`
//   background: transparent
//     linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
//     0% 0% no-repeat padding-box;
//   box-shadow: 0px 2px 6px #0000005a;
//   border-radius: 50px;
//   opacity: 1;
// `;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 1rem;
`;

const Label = styled.label`
  width: 100%
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
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
  padding: 0.3rem;

  opacity: 1;

  @media (min-width: 476px) {
    border-radius: 5px;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid var(---9fa2a8-mid);
  padding: 0.3rem;
  padding-bottom: 5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #9fa2a8;
  border-radius: 5px;
  opacity: 1;
`;

const SubmitContainer = styled.div`
  background: transparent linear-gradient(90deg, #005799 0%, #6996fd 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`;
