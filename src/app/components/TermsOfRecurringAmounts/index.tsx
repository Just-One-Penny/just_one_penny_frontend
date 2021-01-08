/**
 *
 * TermsOfRecurringAmounts
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export function TermsOfRecurringAmounts(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <SubHeaderWrapper>
        <SubHeading>How do the micro-donations work?</SubHeading>
        <Text>
          In order to reduce transaction fees and make the checkout process more
          convenient for our customers, we batch our micro-donations together.
          Instead of seeing 365 individual charges for a $.01 daily donation,
          for example, our customers giving at that level would instead see a
          single charge for $3.65 charged once per year. This accomplishes the
          same average daily gift, but reduces the frequency of donation, which
          makes personal accounting easier.
        </Text>
        <SubHeading>
          The 5 micro-donation daily gift amounts and their corresponding
          payment schedules are summarized here:
        </SubHeading>
        <List>
          <li>$.01 - $3.65 charged annually</li>
          <li>$.05 - $4.57 charged quarterly</li>
          <li>$.10 - $9.13 charged quarterly</li>
          <li>$.25 - $7.61 charged monthly</li>
          <li>$.50 - $15.21 charged monthly</li>
        </List>
      </SubHeaderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Avenir;
  color: #333;
  padding: 2.75rem 1.5rem;
`;

const SubHeaderWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;

  @media only screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  width: 85%;
  margin: 1rem auto;

  & li {
    margin-bottom: 0.5rem;
  }
`;
