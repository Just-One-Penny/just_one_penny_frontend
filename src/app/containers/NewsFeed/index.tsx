/**
 *
 * NewsFeed
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectNewsFeed } from './selectors';
import { newsFeedSaga } from './saga';
import { actions } from './slice';
import Microlink from '@microlink/react';
import { Card } from '@welcome-ui/card';

interface Props {}

export function NewsFeed(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newsFeedSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newsFeed = useSelector(selectNewsFeed);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  dispatch(actions.loadingFeed());
  return (
    <>
      <Div>
        <Card maxWidth={400} lineHeight="2">
          <Card.Body>
            A card doesn't have padding by default. To add padding to a card,
            you should wrap your content in a <strong>Card.Body</strong> which
            has default <strong>padding</strong> of <strong>lg</strong>.
          </Card.Body>
        </Card>
        <Microlink
          url="https://instagram.com/p/Bu1-PpyHmCn/"
          style={{
            fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
          }}
        />
      </Div>
    </>
  );
}

const Div = styled.div``;
