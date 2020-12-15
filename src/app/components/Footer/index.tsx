/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <FooterSection>
      <Column>
        <List>
          <Item>
            <Link href="#">Contact us</Link>
          </Item>
          <Item>
            <Link href="#">FAQ</Link>
          </Item>
          <Item>
            <Link href="#">About</Link>
          </Item>
        </List>
      </Column>
      <Link href="#">Copyright Information</Link>
    </FooterSection>
  );
});

const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  justify-content: space-between;
  padding: 10px;
`;

const Column = styled.div`
  align-items: center;
  width: 33.33%;
  padding: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const Item = styled.li`
  list-style-type: none;
`;

const Link = styled.a`
  color: #333333;
  opacity: 1;
  font-weight: 900;
`;
