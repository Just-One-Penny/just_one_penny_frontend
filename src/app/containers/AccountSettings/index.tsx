/**
 *
 * AccountSettings
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAccountSettings } from './selectors';
import { accountSettingsSaga } from './saga';
import { UserBio } from './UserBio';
import { AccountPaymentInfo } from './AccountPaymentInfo';

interface Props {}

export const AccountSettings = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accountSettings = useSelector(selectAccountSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Account Settings</title>
        <meta name="description" content="Just One Penny Account" />
      </Helmet>
      <UserBio />
      <AccountPaymentInfo />
      <Div>{t('')}</Div>
    </>
  );
});

const Div = styled.div``;
