import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { CharityList } from '../CharityList';
import { charityApi } from 'api/charityApi';

interface LocationParams {
  search: SearchParams;
}

interface SearchParams {
  code?: string;
  state?: string;
}

const getQueryVariable = variable => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('Query variable %s not found', variable);
}

export function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const loc = useLocation();

  const saveStripe = (code, state) => {
    console.log("saveStripe -> code, state", code, state)
    charityApi.connectCharityStripe(code, state);
  };

  if (loc.search && !loaded) {
    const { code, state } = queryString.parse(loc.search);
    if (code && state) {
      saveStripe(code, state);
    }
    setLoaded(true);
  }
  console.log("HomePage -> location", loc)

  return (
    <>
      <Helmet>
        <title>Just One Penny</title>
        <meta
          name="description"
          content="Charitable giving one penny at a time"
        />
      </Helmet>
    </>
  );
}
