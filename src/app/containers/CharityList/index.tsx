/**
 *
 * CharityList
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';
// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCharityList } from './selectors';
import { charityListSaga } from './saga';
import { HeroSection } from 'app/components/HeroSection';
import { CharityFilters } from './CharityFilters';
import { CharityTable } from './CharityTable';
import { selectLoading } from '../AuthenticationModal/selectors';
import { useLocation } from 'react-router-dom';

interface Props {}

export const CharityList = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityListSaga });

  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityList = useSelector(selectCharityList);
  const loading = useSelector(selectLoading);

  const location = useLocation();
  const search = queryString.parse(location.search);
  const searchString = search ? JSON.stringify(search) : null;

  useEffect(() => {
    const getCharities = () => {
      dispatch(actions.getCharitiesRequest(searchString));
    };
    getCharities();
  }, [searchString, dispatch]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Charities</title>
        <meta name="description" content="List of Charities" />
      </Helmet>
      <HeroSection />
      <Row>
        {/* <CharityFilters /> */}
        <CharityTable charities={charityList} loading={loading} />
      </Row>
    </>
  );
});

////////////////////////////////////////////////////////////////////////
////////////////// Temporary justify content property until filters go live

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 650px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }

  ////Temporary
  justify-content: center;
`;
