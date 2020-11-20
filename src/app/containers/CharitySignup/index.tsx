/* eslint-disable react/jsx-no-target-blank */
/**
 *
 * CharitySignup
 *
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Divider } from 'app/components/Divider';
import { Typeform } from './Typeform';
import { InfoForCharities } from './CharityInfo';
import { HeroSection } from 'app/components/HeroSection';

interface Props {}

export function CharitySignup(props: Props) {
  const [state, setState] = useState({ tab: 0 });
  const selectTab = tab => setState({ ...state, tab });

  // Sidebar tabs
  const tabs = ['Info for Charities', 'Charity Sign-up'];

  // Define Tab for map
  const Tab = (tabName, key) => (
    <>
      {key === state.tab ? (
        <ActiveTab onClick={() => selectTab(key)}>{tabName}</ActiveTab>
      ) : (
        <InActiveTab onClick={() => selectTab(key)}>{tabName}</InActiveTab>
      )}
      {key < tabs.length - 1 ? <Divider /> : null}
    </>
  );
  return (
    <>
      <Helmet>
        <title>Charity Signup</title>
        <meta name="description" content="Just One Penny Charity Signup" />
      </Helmet>
      <HeroSection />
      <PageContainer>
        <TabContainer>{tabs.map(Tab)}</TabContainer>
        <TabContentContainer>
          {state.tab === 0 ? <InfoForCharities /> : null}
          {state.tab === 1 ? <Typeform /> : null}
        </TabContentContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  flex: 1;
  background: white;
  padding: 2rem;
  margin-right: 2rem;
  border-radius: 5px;
`;

const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 2rem;
  background: white;
  border-radius: 5px;
`;

const ActiveTab = styled.div`
  display: flex;
  align-items: center;
  background: var(---0a559e-primary) 0% 0% no-repeat padding-box;
  background: #0a559e 0% 0% no-repeat padding-box;
  border-radius: 5px;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 1rem 1rem;
  cursor: pointer;
`;

const InActiveTab = styled.h2`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
  padding-left: 1rem;
  cursor: pointer;
`;
