/**
 *
 * CharityNewsModal
 *
 */
import React, { memo } from 'react';
import styled, { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal';
import { Modal as UIModal, useModalState } from '@welcome-ui/modal';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

interface Props {
  title: string;
  content?: string;
  date?: string;
  urlToImage: string;
}

export const CharityNewsModal = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <ImgBanner src={props.urlToImage} /> */}
      <Header>
        <H3>{props.title}</H3>
      </Header>
      <B1>{props.content}</B1>
      <DonateContainer>
        <Link to="/charities">
          <Button btnStyle="primary">View Charities</Button>
        </Link>
      </DonateContainer>
    </>
  );
});

interface ImageProps {
  src: string;
}

const ImgBanner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  ${(p: ImageProps) =>
    css`
      background-image: url('${p.src}');
    `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1rem;
  align-items: flex-start;
`;

const H3 = styled.h3`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const B2 = styled.p`
  padding-left: 0.1rem;
  padding-bottom: 0.5rem;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const HR = styled.hr`
  border: 1px solid #cbd5e0;
  width: 100%;
  opacity: 0.4;
`;

const B1 = styled.p`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;

  margin-bottom: 140px;
`;

const DonateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -3px 6px #0000001a;
  border-radius: 0px 0px 5px 5px;
  opacity: 1;

  padding-top: 1rem;
  padding-bottom: 1rem;
`;
