import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
// eslint-disable-next-line
import { CharityList } from '../CharityList';
import { Header } from './Header';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Just One Penny</title>
        <meta
          name="description"
          content="Charitable giving one penny at a time"
        />
      </Helmet>
      <NavBar />
      <Header />
    </>
  );
}
