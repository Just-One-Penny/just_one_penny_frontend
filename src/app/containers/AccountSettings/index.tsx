/**
 *
 * AccountSettings
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { selectAccountSettings } from './selectors';
import { accountSettingsSaga } from './saga';
import { UserBio } from './UserBio';
import { AccountPaymentInfo } from './AccountPaymentInfo';
import { AccountDonations } from './AccountDonations';
import { HeroSection } from 'app/components/HeroSection';
import { Divider } from 'app/components/Divider';
import { useAuth } from 'context/auth-context';

import MobileNavTabs from 'app/containers/NavBar/MobileNavTabs';

interface Params {
  setting: string;
}

export const AccountSettings = memo(() => {
  const { user } = useAuth();
  const { setting } = useParams<Params>();

  const [state, setState] = useState({ tab: 0 });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accountSettings = useSelector(selectAccountSettings);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setId(user.id));
  }, [user.id, dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const selectTab = tab => setState({ ...state, tab });

  // Sidebar tabs
  const tabs = ['Donations', 'Billing Information', 'Settings'];

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

  const activeLinkStyle = {
    color: '#fff',
    background: '#0a559e 0% 0% no-repeat padding-box',
  };

  return (
    <>
      <Helmet>
        <title>Account Settings</title>
        <meta name="description" content="Just One Penny Account" />
      </Helmet>

      <HeroSection />

      <PageContainer>
        <TabContainer>
          {MobileNavTabs.AuthTabs.map(tab => (
            <TabItem key={tab.text}>
              <StyledLink activeStyle={activeLinkStyle} exact to={tab.link}>
                {tab.text}
              </StyledLink>
            </TabItem>
          ))}
        </TabContainer>

        <TabContentContainer>
          {setting === 'donations' || setting === undefined ? (
            <AccountDonations />
          ) : null}

          {setting === 'billingInformation' ? <AccountPaymentInfo /> : null}

          {setting === 'userSettings' ? <UserBio /> : null}
        </TabContentContainer>
      </PageContainer>
    </>
  );
});

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4rem auto;
  padding: 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 650px) {
    margin: 2rem 0 1.5rem 0;
    padding: 0 1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: white;
  padding: 1rem 1rem;
  margin-right: 2.5rem;
  border-radius: 5px;

  max-width: 23rem;
  width: 100%;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  max-width: 48.5rem;
  // min-height: 49rem;
  width: 100%;

  @media only screen and (max-width: 650px) {
    // padding: 1.5625rem 0.4375rem 0 0.5rem;
    // min-height: 0;
  }
`;

const TabItem = styled.div`
  padding: .5rem 1rem .5rem 1rem;
  color: #333;
  border-bottom .25px solid #e1e1e1;
  // padding: 1.5625rem 0.4375rem 0 0.5rem;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 1.25rem;
  font-weight: 900;
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 0.75rem 0 0.5625rem 1rem;

  &:hover {
    color: #0a559e;
  }
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
