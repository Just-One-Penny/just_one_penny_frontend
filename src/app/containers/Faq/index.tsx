/**
 *
 * Faq
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { HeroSection } from '../../components/HeroSection';

interface Props {}

export const Faq = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="Just One Penny FAQs" />
      </Helmet>
      <Div>{t('')}</Div>
    </>
  );
});

const Div = styled.div``;
