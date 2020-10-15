import React from 'react';
import styled from 'styled-components/macro';
import { reducer, sliceKey, actions } from './slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';

import { ListContainer } from '../../components/ListContainer';
// import { selectGetCharities } from './selectors';
// import { useSelector, useDispatch } from 'react-redux';
import { accountSettingsSaga, getCharities } from './saga';

import { AccountSettingsState } from './types';

export function UserCharities() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: getCharities });

  const { user } = useAuth();
  const currentUser: AccountSettingsState = {
    id: user.id!,
    fullName: user.fullName!,
    charities: user.charities,
  };

  const charityList = currentUser.charities.map(charity => ({
    id: charity.id,
    logo: charity.logo,
    name: charity.name,
  }));

  return (
    <Wrapper>
      <ListContainer list={charityList} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
`;
