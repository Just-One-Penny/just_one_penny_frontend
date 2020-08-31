/**
 *
 * About
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

interface Props {}

export const About = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Just One Penny" />
      </Helmet>
      <header>About Us</header>
      <div>
        <p>
          Non culpa cillum ut officia. Adipisicing sint aute anim consequat
          aliqua nisi eu qui reprehenderit excepteur non nulla est. Enim labore
          et cillum officia minim adipisicing. Cupidatat veniam id minim quis
          sit officia. Laborum id elit voluptate minim ut consectetur quis elit
          dolor laborum. Deserunt laboris et aute cupidatat in eiusmod sit in
          ipsum cupidatat quis esse proident. Ullamco adipisicing est aliqua
          deserunt.
          <br />
          Laboris irure dolor veniam sit duis aliquip proident. Minim magna
          exercitation laborum sunt cupidatat nisi mollit cupidatat Lorem
          adipisicing duis. Sunt enim ullamco aliqua tempor pariatur ipsum
          incididunt veniam ullamco. Lorem do ex proident ad consequat ad ipsum.
          <br />
          Id enim consectetur cillum fugiat amet eu voluptate Lorem mollit aute
          tempor in non reprehenderit. Dolor labore velit labore nostrud
          occaecat id adipisicing magna magna nulla ullamco laborum adipisicing.
          Tempor fugiat culpa sunt do. Anim ea cupidatat officia aliqua
          consectetur id id consectetur excepteur officia qui anim. Culpa mollit
          duis dolor commodo ea tempor dolore. Ipsum elit eu enim nulla elit
          velit Lorem aute cillum non esse.
        </p>
      </div>
    </>
  );
});

const Div = styled.div``;
