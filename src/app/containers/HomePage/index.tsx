import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Helmet } from 'react-helmet-async';
import { charityApi } from 'api/charityApi';
import { HeroBox } from './HeroBox';
import { CharityNews } from './CharityNews';

interface LocationParams {
  search: SearchParams;
}

interface SearchParams {
  code?: string;
  state?: string;
}

export function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const loc = useLocation();

  const saveStripe = (code, state) => {
    charityApi.connectCharityStripe(code, state);
  };

  if (loc.search && !loaded) {
    const { code, state } = queryString.parse(loc.search);
    if (code && state) {
      saveStripe(code, state);
    }
    setLoaded(true);
  }

  return (
    <>
      <Helmet>
        <title>Just One Penny</title>
        <meta
          name="description"
          content="Charitable giving one penny at a time"
        />
      </Helmet>
      <HeroBox />
      <CharityNews />
    </>
  );
}
