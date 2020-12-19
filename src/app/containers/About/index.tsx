/**
 *
 * About
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { HeroSection } from '../../components/HeroSection';
import { Modal } from '../../components/Modal';
import { TermsOfService } from '../../components/TermsOfService';

interface Props {}

export const About = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Just One Penny" />
      </Helmet>

      <HeroSection />

      <AboutSection>
        <AboutContent>
          <H2>About</H2>

          <TextBlock>
            <B1>
              Just One Penny is the world’s first micro-donation platform that
              allows donors to establish recurring charitable gifts of as small
              as one penny per day. Together, we can lead a revolution toward
              more inclusive giving.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>Our Mission</H3>
            <B1>
              To make charitable giving easy and accessible to everyone in the
              U.S.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>Our Vision</H3>
            <B1>A world in which everyone feels empowered to give.</B1>
          </TextBlock>

          <TextBlock>
            <H3>Our Values</H3>

            <BulletText>
              <B2>Integrity</B2>
              <B1>
                We at JOP believe that every charity should operate in the best
                interest of its donors and the rest of the world. Our users
                should have faith that our sole focus is improving their giving
                experience.
              </B1>
            </BulletText>

            <BulletText>
              <B2>Creativity</B2>
              <B1>
                A platform like JOP is unprecedented, so focusing on creative
                solutions will allow us to continue to make giving accessible to
                all who believe in the work of our amazing nonprofit partners.
              </B1>
            </BulletText>

            <BulletText>
              <B2>Teamwork</B2>
              <B1>
                No charity can function without the help of its corporate,
                government, and community partners. JOP seeks to strengthen
                these bonds continually to keep our site strong and our users
                happy.
              </B1>
            </BulletText>

            <BulletText>
              <B2>Efficiency</B2>
              <B1>
                JOP has taken the framework of a charity and infused it with the
                spirit of a tech company, yielding a stream-lined charitable
                donation machine!
              </B1>
            </BulletText>

            <BulletText>
              <B2>Respect</B2>
              <B1>
                Our unending respect for the charities that do so much great
                work in our world drives JOP to provide them with the additional
                resources they need to be successful.
              </B1>
            </BulletText>

            <BulletText>
              <B2>Transparency</B2>
              <B1>
                We at JOP owe it to our supporters to be as transparent and
                honest about our operations as possible. We’re an open book
                because we want the world to know that everything we do is for
                our charity partners.
              </B1>
            </BulletText>

            <BulletText>
              <B2>Innovation</B2>
              <B1>
                Complacency will quickly cripple any organization it affects.
                JOP strives to introduce new and exciting giving opportunities
                to people around the world, because our charities need it now
                more than ever.
              </B1>
            </BulletText>
          </TextBlock>

          <TextBlock>
            <H3>Why One Penny?</H3>
            <B1>
              Studies have shown that charitable giving is not as prevalent
              among young Americans as it was in past generations. Costs of
              living have skyrocketed in recent decades, and wages have
              struggled to keep pace, so many Americans have simply been unable
              to contribute to our nation’s great charities. In response, we’ve
              built a platform that allows people of all ages to make charitable
              gifts of as small as one penny per day, offering today’s donors
              the ability to find charities they love and begin supporting them
              an ultra-attainable price point. We call these gifts
              "micro-donations," and we believe that the combined contribution
              from thousands of modest donations will show the world how
              powerful a penny can be.
            </B1>
            <br />
            <B1>
              Unlike other charity fundraising sites, we're a 501(c)(3)
              nonprofit organization ourselves, and we don't take a single cent
              from the donations our partner charities receive through our site.
              We've financed our operation through independent channels, so
              we'll never charge a fee or take a cut from our charity partners.
            </B1>
          </TextBlock>
          <TextBlock>
            <B1>
              *Persuant to our{' '}
              <Modal
                buttonElement={<TextLink>Terms and Conditions</TextLink>}
                modalBody={<TermsOfService />}
              />
            </B1>
          </TextBlock>
        </AboutContent>
      </AboutSection>
    </>
  );
});

const AboutSection = styled.section`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContent = styled.div`
  flex: 0 0 40.83333333%;
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding: 1.75rem 6rem;
  background-color: #ffffff;
  border-radius: 5px;

  @media only screen and (max-width: 1024px) {
    padding: 1.75rem 3rem;
    flex: 0 0 60%;
  }

  @media only screen and (max-width: 768px) {
    flex: 0 0 70%;
  }

  @media only screen and (max-width: 600px) {
    flex: 0 0 80%;
    padding: 1.75rem 1.5rem;
  }

  @media only screen and (max-width: 475px) {
    flex: 0 0 90%;
    padding: 1.75rem 0.75rem 0 0.75rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  font-color: #333;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  font-color: #333;

  @media only screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

const B2 = styled.p`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const B1 = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 300;
`;

const TextBlock = styled.div`
  margin-bottom: 1.75rem;
`;

const TextLink = styled.span`
  color: #0a559e;
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #0c4379;
    text-decoration: underline;
  }
`;

const BulletText = styled.div`
  position: relative;
  margin-left: 16px;
  margin-bottom: 8px;

  &::before {
    position: absolute;
    // content: '•';
    content: '';
    height: 8px;
    width: 8px;
    background-color: #333;
    border-radius: 50%;
    left: -16px;
    top: 8px;
  }
`;
