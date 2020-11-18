/**
 *
 * CharityList
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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

interface Props {}

export const CharityList = memo((props: Props) => {
  const [rendered, setRendered] = useState(false);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityListSaga });
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityList = useSelector(selectCharityList);
  useEffect(() => {
    if (!rendered) {
      dispatch(actions.getCharitiesRequest());
      setRendered(true);
    }
  }, [rendered]);
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
        <CharityFilters />
        <CharityTable charities={charityList} />
      </Row>
    </>
  );
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;
