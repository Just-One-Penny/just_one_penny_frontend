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
import { selectArticles } from './selectors';
import { newsFeedSaga } from './saga';
import { actions } from './slice';
import { Text } from '@welcome-ui/text';
import { Card } from '@welcome-ui/card';
import { Article } from 'types/newsFeed';

interface Props {}

export function NewsFeed(props: Props) {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newsFeedSaga });

  const newsFeed: Article[] = useSelector(selectArticles);
  if (!newsFeed.length) {
    dispatch(actions.loadingFeed());
  }

  return (
    <>
      <Div>
        {newsFeed.map(article => (
          <CardContainer maxWidth={400} lineHeight="2">
            <Card.Cover width={1} src={article.urlToImage} />
            <Card.Body>
              <Text as="h4" fontWeight="bold" mt={0} mb="lg" color="dark.900">
                {article.title}
              </Text>
              <Description>
                <LineClamp>{article.description}</LineClamp>
              </Description>
            </Card.Body>
          </CardContainer>
        ))}
      </Div>
    </>
  );
}

const CardContainer = styled(Card)`
  margin-bottom: 2rem;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
`;

const Description = styled.div`
  margin: 0 0 1em 0;
  overflow: hidden;
`;

const LineClamp = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
