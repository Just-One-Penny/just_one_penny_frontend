/**
 *
 * AccountSettings
 *
 */

import React, { memo, useEffect, useState } from 'react';
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

interface Props {}

export const AccountSettings = memo((props: Props) => {
  const { user } = useAuth();
  const [state, setState] = useState({ tab: 0 });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accountSettings = useSelector(selectAccountSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setId(user.id));
  }, []);

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

  return (
    <>
      <Helmet>
        <title>Account Settings</title>
        <meta name="description" content="Just One Penny Account" />
      </Helmet>
      <HeroSection />
      <PageContainer>
        <TabContainer>{tabs.map(Tab)}</TabContainer>
        <TabContentContainer>
          {state.tab === 0 ? <AccountDonations /> : null}
          {state.tab === 1 ? <>Billing Information</> : null}
          {state.tab === 2 ? <UserBio /> : null}
        </TabContentContainer>
      </PageContainer>
    </>
  );
});

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
