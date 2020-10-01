/**
 *
 * CharityDisplay
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { withRouter } from 'react-router';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCharityDisplay } from './selectors';
import { charityDisplaySaga } from './saga';
import { useParams } from 'react-router-dom';

interface Props {}

export const CharityDisplay = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityDisplaySaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const charityId: string = useParams();

  dispatch(actions.getCharityByIdRequest(charityId));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityDisplay = useSelector(selectCharityDisplay);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Charity Details</title>
        <meta name="description" content="Details of charity {}" />
      </Helmet>
      <header>Charity Details</header>
      <Wrapper>
        <MainDiv>
          <H2>{charityDisplay?.name}</H2>
          {charityDisplay?.summary}
        </MainDiv>
        <SubDiv>
          {t('')}
          <H3>Contact Information</H3>
          Address?
          {charityDisplay?.city}, {charityDisplay?.state}
          <br />
          Phone?
          <br />
          <a href={charityDisplay?.website}>{charityDisplay?.website}</a>
          <DonateButton>Donate to This Charity</DonateButton>
        </SubDiv>
      </Wrapper>
    </>
  );
});

export const CharityDisplayWithRouter = withRouter(CharityDisplay);

const Wrapper = styled.section`
  padding: 1em;
  background: #f2f2f2;
`;

const H2 = styled.h2`
  font-size: 28px;
  font-family: avenir;
  margin: 0;
  font-weight: heavier;
`;

const H3 = styled.h3`
  font-size: 21px;
  font-family: avenir;
  margin: 0;
  font-weight: heavy;
`;

const MainDiv = styled.div`
  padding: 1em;
  margin: 0.5em;
  background: white;
  display: inline-block;
  width: 63%;
  vertical-align: top;
  border-radius: 5px;
  font-family: avenir;
`;
const SubDiv = styled.div`
  padding: 1em;
  margin: 0.5em;
  width: 32%;
  background: white;
  display: inline-block;
  border-radius: 5px;
  font-family: avenir;
`;
const DonateButton = styled.button`
  background: #0c4379;
  color: white;
  padding: 1em 2em;
  border-radius: 25px;
  display: block;
  margin: 0.5em;
  font-family: avenir;
`;
