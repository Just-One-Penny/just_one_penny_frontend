/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { PageWrapper } from '../../components/PageWrapper';
import { FormField } from '../../components/FormField';

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
      <PageWrapper>
        <Container>
          <PageHeading>Contact Us</PageHeading>
          <MainBox>
            <TextBox>
              <SubHeader>Subheading</SubHeader>
              <B1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque mollis sapien, eget semper tortor condimentum
                imperdiet. Maecenas cursus, neque quis venenatis faucibus, eros
                lacus accumsan tellus, et suscipit leo neque vel magna.
              </B1>
              <SubHeader>Subheading</SubHeader>
              <B1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque mollis sapien, eget semper tortor condimentum
                imperdiet. Maecenas cursus, neque quis venenatis faucibus, eros
                lacus accumsan tellus, et suscipit leo neque vel magna.
              </B1>
            </TextBox>
            <FormBox>
              <form id="contact-us" method="POST" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <FormField
                    type="text"
                    placeholder="First and Last Name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="inputEmail">Email Address</label>
                  <FormField
                    type="email"
                    name="inputEmail"
                    placeholder="email@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="messageBody">Message</label>
                  <FormField
                    name="messageBody"
                    type="text"
                    placeholder="How can we help?"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <Button>Submit</Button>
                </div>
              </form>
            </FormBox>
          </MainBox>
        </Container>
      </PageWrapper>
    </>
  );
});

const Container = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  flex-flow: column;
  opacity: 1;
`;

const PageHeading = styled.div`
  flex-direction: row;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-42)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: center;
  font: normal normal 900 28px/42px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const SubHeader = styled.h3`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const B1 = styled.b`
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
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: row;
`;

const TextBox = styled.div`
  flex: 1;
`;

const FormBox = styled.div`
  flex: 1;
`;

const Button = styled.button`
  background: transparent
    linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
`;
