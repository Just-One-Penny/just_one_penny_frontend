/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const activeLink = {
  color: '#0A559E',
};

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <FooterSection>
      <FooterContent>
        <NavLink activeStyle={activeLink} to="/contactUs">
          Contact Us
        </NavLink>

        <NavLink activeStyle={activeLink} to="/faq">
          FAQ
        </NavLink>

        <NavLink activeStyle={activeLink} to="/about">
          About
        </NavLink>

        <Copyright>Copyright Information</Copyright>
      </FooterContent>
    </FooterSection>
  );
});

const FooterSection = styled.footer`
  color: #333333;
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 650px) {
    height: 14rem;
    padding: 2rem 0 1.6875rem 1rem;
    justify-content: flex-start;
  }
`;

const FooterContent = styled.div`
  width: 62.1875%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 75%;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  & a {
    font-weight: 900;
    font-size: 1rem;

    &:hover {
      color: #0a559e;
    }

    &:active {
      color: #0c4379;
    }

    &:not(:last-of-type) {
      margin-right: 3.125rem;

      @media only screen and (max-width: 650px) {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 650px) {
      margin-bottom: 1.625rem;

      &:last-of-type {
        margin-bottom: 1.75rem;
      }
    }
  }
`;

const Copyright = styled.div`
  margin-left: auto;
  font-weight: 400;
  font-size: 0.875rem;

  @media only screen and (max-width: 650px) {
    margin-left: 0;
  }
`;
