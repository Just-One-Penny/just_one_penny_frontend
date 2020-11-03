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
  const [message, setMessage] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
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
        </MainBox>
      </Container>
    </>
  );
});

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background: var(---f2f2f2-light) 0% 0% no-repeat padding-box;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  flex-flow: column;
`;

const PageHeading = styled.div`
  flex-direction: row;
  margin-left: 2.8rem;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
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
`;

const B1 = styled.b`
  margin-left: 2.6rem;
  margin-right: 2.2rem;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 75%;
  padding-bottom: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
`;

const FormBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: stretch;
  margin-left: 3rem;
  margin-right: 3rem;
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
  padding: 0.3rem;
  border: 1px solid var(---9fa2a8-mid);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #9fa2a8;
  border-radius: 5px;
  opacity: 1;
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
