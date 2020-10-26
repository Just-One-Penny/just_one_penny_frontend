/**
 *
 * CharitySignup
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

interface Props {}

export function CharitySignup(props: Props) {
  return (
    <>
      <Helmet>
        <title>Charity Signup</title>
        <meta name="description" content="Just One Penny Charity Signup" />
      </Helmet>
      <Div>
        <div
          className="typeform-widget"
          data-url="https://form.typeform.com/to/gnnBzRDl"
          style={{ width: '100%', height: '500px' }}
        ></div>
        <script>
          {(function () {
            var qs,
              js,
              q,
              s,
              d = document,
              gi = d.getElementById,
              ce = d.createElement,
              gt = d.getElementsByTagName,
              id = 'typef_orm',
              b = 'https://embed.typeform.com/';
            if (!gi.call(d, id)) {
              js = ce.call(d, 'script');
              js.id = id;
              js.src = b + 'embed.js';
              q = gt.call(d, 'script')[0];
              q.parentNode.insertBefore(js, q);
            }
            return null;
          })()}
        </script>
        <div
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: '12px',
            color: '#999',
            opacity: '0.5',
            paddingTop: '5px',
          }}
        >
          {' '}
          powered by{' '}
          <a
            href="https://admin.typeform.com/signup?utm_campaign=gnnBzRDl&utm_source=typeform.com-01EM1K6BTZDJPG7HB1R29F0ZT4-essentials&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
            style={{ color: '#999' }}
            target="_blank"
          >
            Typeform
          </a>{' '}
        </div>
      </Div>
    </>
  );
}

const Div = styled.div``;
