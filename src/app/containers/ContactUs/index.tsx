/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Textarea } from '@welcome-ui/textarea';
import { Button } from '@welcome-ui/button';
import { Field } from '@welcome-ui/field';
import { InputText } from '@welcome-ui/input-text';
import { PageWrapper } from '../../components/PageWrapper';

interface Props {}

export const ContactUs = memo((props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Description of ContactUs" />
      </Helmet>
      <PageWrapper>
        <form id="contact-us" method="POST" onSubmit={handleSubmit}>
          <Div>
            <label htmlFor="name">Name</label>
            <Field
              component={InputText}
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Div>
          <Div>
            <label htmlFor="inputEmail">Email Address</label>
            <Field
              component={InputText}
              name="inputEmail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Div>
          <Div>
            <label htmlFor="messageBody">Message</label>
            <Field
              name="messageBody"
              label="messageBody"
              component={Textarea}
              hint="Enter email text here."
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></Field>
          </Div>
          <Button size="md">Submit</Button>
        </form>
      </PageWrapper>
    </>
  );
});

const Div = styled.div``;
