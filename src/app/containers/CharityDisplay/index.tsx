/**
 *
 * CharityDisplay
 *
 */

import React, { memo, useEffect } from 'react';
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
import { HeroSection } from 'app/components/HeroSection';
import { DonationButton } from 'app/components/DonationButton';

interface Props {}
interface Params {
  charityId: string;
}

export const CharityDisplay = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityDisplaySaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { charityId }: Params = useParams();

  useEffect(() => {
    const fetchData = () => {
      dispatch(actions.getCharityByIdRequest(charityId));
    };

    fetchData();
  }, [charityId]);

  console.log('CHARITYID', charityId);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityDisplay = useSelector(selectCharityDisplay);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* {charityDisplay ? (
        <Helmet>
          <Title>{charityDisplay?.name}</Title>
          <meta name="description" content={charityDisplay?.summary} />
        </Helmet>
      ) : null}*/}
      <HeroSection />

      <Wrapper>
        <MainDiv className="mr-5">
          <CharityHero>
            <CharityImage src={charityDisplay?.logo} />
          </CharityHero>
          <CharitySummary>
            <H2>{charityDisplay?.name}</H2>
            <Category>Category:</Category>
            <CategoryText>
              {charityDisplay?.categories
                ? charityDisplay?.categories.join(',')
                : ''}
            </CategoryText>
            <br className="mt-10" />
            <br />
            <Category>Mission:{t(' ')}</Category>
            {charityDisplay?.mission}
            <br />
            <br />
            <Category>Summary:{t(' ')}</Category>
            {charityDisplay?.summary}
            <br />
            <br />
          </CharitySummary>
        </MainDiv>
        <SubDiv>
          {/* {t('')}
          <H3>Contact Information</H3>
          Address?
          {charityDisplay?.city}, {charityDisplay?.state}
          <br />
          Phone?
              <br /> */}
          <>
            Annual Revenue: ${charityDisplay?.lastYearRevenue.revenue}.00
            <br />
            EIN: {charityDisplay?.ein}
            <br />
          </>
          {charityDisplay?.website ? (
            <>
              Visit Website:
              <Link href={charityDisplay?.website}>
                {charityDisplay?.website}
              </Link>
            </>
          ) : null}
          {charityDisplay?.id ? (
            <DonationButton
              charityId={charityDisplay.id}
              charityName={charityDisplay.name}
            />
          ) : null}
        </SubDiv>
      </Wrapper>
    </>
  );
});

export const CharityDisplayWithRouter = withRouter(CharityDisplay);

interface ImageProps {
  src: string | undefined;
}

const Title = styled.title`
  text-transform: capitalize;
`;

const CharityImage = styled.div`
  position: relative;
  top: 55%;
  left: 2rem;
  width: 15rem;
  height: 6rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  resize: both;
  background-image: url('${(p: ImageProps) => p.src}');
`;

const Wrapper = styled.section`
  padding: 1em;
  background: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Link = styled.a`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / 22px
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/22px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
`;

const CharityHero = styled.div`
  background-color: #11569b;
  border-radius: 5px 5px 0px 0px;
  opacity: 1;
  height: 10rem;
`;

const CharitySummary = styled.div`
  padding-top: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Category = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const CategoryText = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const H2 = styled.h2`
  font-size: 28px;
  font-family: avenir;
  margin: 0;
  font-weight: heavier;
  text-transform: capitalize;
`;

const H3 = styled.h3`
  font-size: 21px;
  font-family: avenir;
  margin: 0;
  font-weight: heavy;
`;

const MainDiv = styled.div`
  background: white;
  display: inline-block;
  flex: 3;
  vertical-align: top;
  border-radius: 5px;
  font-family: avenir;
  padding-bottom: 2rem;
`;
const SubDiv = styled.div`
  padding: 1em;
  flex: 1;
  background: white;
  display: inline-block;
  border-radius: 5px;
  font-family: avenir;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
