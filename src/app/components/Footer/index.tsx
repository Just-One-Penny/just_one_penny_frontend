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
      <FooterDetails>
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

          <Copyright>Copyright Information</Copyright>
        </List>
      </FooterDetails>
    </FooterSection>
  );
});

const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  justify-content: center;
  padding: 10px;

  @media only screen and (max-width: 475px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 0.5rem 0 0 1rem;
  }
`;

const FooterDetails = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 70%;
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;

    & > * {
      margin-bottom: 1.75rem;
    }
  }
`;

const Item = styled.li`
  list-style-type: none;
  white-space: nowrap;
  margin-right: 3rem;

  @media only screen and (max-width: 475px) {
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: #333333;
  opacity: 1;
  font-weight: 900;
`;

const Copyright = styled.div`
  color: #333333;
  font-size: 0.875rem;
  margin-left: auto;

  @media only screen and (max-width: 475px) {
    margin-left: 0;
  }
`;
