/**
 *
 * ListContainer
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Card } from '@welcome-ui/card';
import { Stack } from '@welcome-ui/stack';

interface Props {
  list: Type[];
}

interface Type {
  id: string;
  logo: string;
  name: string;
}

export const ListContainer = ({ list }: Props) => {
  return (
    <>
      <Div>
        {list.map(charity => (
          <Card key={charity.id}>
            <Stack direction="row">
              <div>{charity.logo}</div>
              <div>{charity.name}</div>
            </Stack>
          </Card>
        ))}
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
