import React from 'react';
import styled from 'styled-components/macro';
import { reducer, sliceKey, actions } from './slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';

import { ListContainer } from '../../components/ListContainer';
// import { selectGetCharities } from './selectors';
// import { useSelector, useDispatch } from 'react-redux';

import { accountSettingsSaga } from './saga';
import { Auth } from 'types/User';

export function UserCharities() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  const { user }: Auth = useAuth();

  const charityList = user.charities.map(charity => ({
    id: charity.id,
    logo: charity.logo,
    name: charity.name,
  }));

  return (
    <Wrapper>
      <Div>
        <p>Charity</p>
        <p>Amount</p>
        <p>Next Donation</p>
      </Div>
      <ListContainer list={charityList} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Div = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
