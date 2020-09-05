/**
 *
 * CharityList
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCharityList } from './selectors';
import { charityListSaga } from './saga';

interface Props {}

export const CharityList = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityListSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityList = useSelector(selectCharityList);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const charities = dispatch(actions.getCharitiesRequest);

  console.log(charities);
  console.log('hi');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Charities</title>
        <meta name="description" content="List of Charities" />
      </Helmet>
      <header>Charities</header>
      <table>
        <thead>
          <th>Search Results</th>
          <th>Keywords</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/*<Div>{t('')}</Div>*/}
    </>
  );
});

const Div = styled.div``;
