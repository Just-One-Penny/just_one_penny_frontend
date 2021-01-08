/**
 *
 * Faq
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { HeroSection } from '../../components/HeroSection';
import { Link } from 'react-router-dom';

interface Props {}

export const Faq = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="Just One Penny FAQs" />
      </Helmet>
      <HeroSection />

      <FaqSection>
        <FaqContent>
          <H2>FAQ</H2>

          <TextBlock>
            <H3>What’s a micro-donation?</H3>
            <B1>
              A micro-donation is a small, recurring donation on our platform.
              We allow sub-$1.00 daily gift amounts of $.01, $.05, $.10, $.25,
              and $.50, meaning that you can establish daily recurring gift
              amounts at these levels to the charities of your choice.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>How do the micro-donations work?</H3>
            <B1>
              In order to reduce transaction fees and make the checkout process
              more convenient for our customers, we batch our micro-donations
              together. Instead of seeing 365 individual charges for a $.01
              daily donation, for example, our customers giving at that level
              would instead see a single charge for $3.65 charged once per year.
              This accomplishes the same average daily gift, but reduces the
              frequency of donation, which makes personal accounting easier.{' '}
            </B1>
            <br></br>
            <B1>
              The 5 micro-donation daily gift amounts and their corresponding
              payment schedules are summarized here:
            </B1>
            <br></br>
            <B1>$.01 - $3.65 charged annually</B1>
            <B1>$.05 - $4.57 charged quarterly</B1>
            <B1>$.10 - $9.13 charged quarterly</B1>
            <B1>$.25 - $7.61 charged monthly</B1>
            <B1>$.50 - $15.21 charged monthly</B1>
          </TextBlock>

          <TextBlock>
            <H3>What are transaction fees?</H3>
            <B1>
              Our credit card processor, Stripe, charges $.30 + 2.9% of each
              transaction for every donation that we process, so it’s more cost
              effective for us to batch small donations together to minimize
              these costs. This is an industry standard, and every financial
              transaction conducted using credit cards on any website has these
              same costs. However, Just One Penny does not receive any income
              from these charges, nor do we take any percentage of your
              donations, so 100% of your donations go straight to your selected
              charities once the processing fees are settled.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>Can I make larger donations?</H3>
            <B1>
              Of course! We love to facilitate micro-donations, but you can
              absolutely use our platform to establish larger one-time or
              recurring donations. Just toggle to the ‘Standard’ section of the
              checkout page and you’ll be all set!
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>Why aren’t there more charities?</H3>
            <B1>
              In order to ensure that both donors and charities have an
              optimized experience on our platform, we must establish individual
              agreements with each charity partner, and we’re still onboarding
              new charities everyday. We’ve got this process down to a science,
              but you can help us spread the word about our platform by reaching
              out to the charities that you love and telling them that you want
              to see them on Just One Penny.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>How can charities sign-up?</H3>
            <B1>
              Easily! Any 501(c)(3) nonprofit organization can sign-up to use
              our platform by visiting our{' '}
              <Link to="/charities/new">
                <TextLink>Charity Sign-up page </TextLink>{' '}
              </Link>
              and completing our quick questionnaire. Once a charity signs up,
              we’ll take their information and create a custom profile that will
              allow donors to learn more about them and establish single-time
              and recurring donations. These organizations will then show up in
              search results on our platform, and donors from across the country
              will be able to support them.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>What happens to my donation once I checkout?</H3>
            <B1>
              Your donations are sent directly to our charity partners’ Stripe
              account, where they have immediate access to them. We never
              ‘touch’ funds that pass through our site, and donors and charities
              can rest assured that the transaction process is happening safely
              and securely due to our industry-leading payment processor
              Stripe’s security.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>I accidentally made a donation. Can I be refunded?</H3>
            <B1>
              Yes. If you made a donation in error please use the{' '}
              <Link to="/contactUs">
                <TextLink>contact page </TextLink>
              </Link>
              of our platform to notify us and we will reach out to you about
              your refund.
            </B1>
          </TextBlock>

          <TextBlock>
            <H3>How does Just One Penny make money?</H3>
            <B1>
              Just One Penny never takes a cent from your donations to our
              charity partners. Instead, we’ve raised capital from a number of
              generous philanthropic donors, and as a charity ourselves we
              encourage those who appreciate our service to consider donating to
              us as well! [LINK TO JOP PAGE].
            </B1>
          </TextBlock>
        </FaqContent>
      </FaqSection>
    </>
  );
});

const FaqSection = styled.section`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FaqContent = styled.div`
  flex: 0 0 80%;
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
  color: #333;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  color: #333;

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
