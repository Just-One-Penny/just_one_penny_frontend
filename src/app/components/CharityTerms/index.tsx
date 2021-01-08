/**
 *
 * CharityTerms
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export function CharityTerms(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Header>
        <HeadingWrapper>
          <Heading>Just One Penny, Inc</Heading>
          <Heading>Terms of Use Agreement</Heading>
        </HeadingWrapper>

        <SubText>
          <span>Effective Date:</span> 9 October 2020
        </SubText>

        <SubText>
          <span>Last Updated:</span> 9 October 2020
        </SubText>
      </Header>

      <SubHeaderWrapper>
        <Text>
          Welcome to JustOnePenny.org, operated by JUST ONE PENNY, INC. (“Just
          One Penny”, “we,” “us,” “our”). This is an agreement (the “Agreement”)
          that governs your use of JustOnePenny.org, and any Just One Penny web
          application(s) or mobile application(s) that refer to and governed by
          these Terms of Use (collectively, the “Services”).
          <br />
          <br />
          <BoldText>
            PLEASE READ THIS AGREEMENT CAREFULLY AS THEY CONTAIN IMPORTANT
            INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS.
            THESE INCLUDE VARIOUS LIMITATIONS AND EXCLUSIONS.
          </BoldText>
          <br />
          <br />
          ESTABLISHING AN ACCOUNT ON THE SERVICE OR USING THE SERVICES
          CONSTITUTES YOUR AGREEMENT TO FOLLOW AND BE BOUND BY THIS AGREEMENT.
          IF YOU CHOOSE NOT TO ACCEPT THIS AGREEMENT, DO NOT CONCLUDE THIS
          AGREEMENT, AND DO NOT USE OR ACCESS (OR CONTINUE TO USE OR ACCESS) THE
          SERVICES, VIEW, DOWNLOAD, OR OTHERWISE USE ANY JUST ONE PENNY WEBSITE
          OR INFORMATION.
        </Text>
      </SubHeaderWrapper>
      <SubHeaderWrapper>
        <SubHeading>1. GENERAL TERMS AND INTRODUCTION</SubHeading>
        <Text>
          <NumberedItemWrapper>
            1.1. The Services are offered as a technology to allow
            not-for-profit organizations, such as religious organizations,
            charitable organizations, and not-for-profit event hosts, and
            fundraisers (each, a “Donee”) to receive charitable donations
            (“Donations”) via the Services from donors (“Donors”).
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            1.2. The terms and conditions of this Agreement are in addition to
            any terms and conditions of any and all other agreements that you
            may have with Just One Penny.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            1.3. Just One Penny does not exercise any control over any
            Donations, Donee or Donor. Just One Penny disclaims all liability
            (to the extent allowed under law) for any actions (or inaction) by
            any User and has no control over the conduct of, or any information
            provided by a Donor.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            1.4. Just One Penny expressly disclaims all liability (to the extent
            allowed under applicable law), and does not make any guarantees,
            express or implied:
            <ul>
              <li>
                1.4.1. That any Donations will be received or that any Donations
                will be successful;
              </li>
              <li>
                1.4.2. That any statements, representations, content, or any
                other materials available via the Service is factually accurate.
              </li>
            </ul>
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            1.5. You agree that any material breach of this Agreement will
            result in irreparable harm to Just One Penny for which damages would
            be an inadequate remedy and, therefore, in addition to its rights
            and remedies otherwise available at law, Just One Penny will be
            entitled to equitable relief, including both a preliminary and
            permanent injunction, if such a breach occurs. You waive any
            requirement for the posting of a bond or other security if Just One
            Penny seeks such an injunction.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>2. INTELLECTUAL PROPERTY NOTICES</SubHeading>
        <Text>
          <NumberedItemWrapper>
            2.1. The Services, and any technology and software underlying the
            Services or distributed in connection therewith are the property of
            Just One Penny, our affiliates and our partners. Subject to your
            compliance with this Agreement, Just One Penny hereby grants to you
            a non-exclusive, terminable, non-transferable, revocable right and
            license to access and use the Services pursuant to this Agreement,
            in and under Just One Penny’s intellectual property rights. Customer
            shall not use or otherwise access the Services in a manner that
            exceeds Customer’s authorized use as set forth in this Agreement.
            Just One Penny reserves all rights not granted herein.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            2.2. All content on the Services, including the logo, articles,
            other text and graphics (collectively, the “Services Content”) is
            the intellectual property of Just One Penny. The Services Content
            are protected by trademark, trade dress, copyright, and patent laws
            of the U.S. The Services Content may not be copied, imitated, used,
            or disseminated in whole or in part, without the prior written
            permission of Just One Penny. You may view, print, copy, and
            download portions of the Services Content solely in connection with
            your use of the Services, and solely for your own individual,
            internal, non-commercial use or records. You agree that you will not
            use (or allow others to use) the Service or any information
            contained on it for any wrongful, unauthorized, or unlawful
            purposes, as further disclosed in this Agreement. You also agree to
            indemnify and hold us and our affiliates harmless from and against
            any loss, damage, or expense incurred because of any such use. Just
            One Penny reserves the right to revoke the authorizations in this
            Section 2 at any time.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            2.3. Users posting their own content (“User Content”) on the
            Services pursuant to this Agreement retain the copyright in such
            material, but they are deemed to have given Just One Penny a license
            to such User Content sufficient for the purposes of operating the
            Services, which means Just One Penny can copy the User Content for
            backup and archival purposes, display it on the Services, use for
            advertising, allow viewers to view it (including by downloading a
            copy to the viewer's machines) and edit it for length or compliance
            with the rules applicable to Users posting on the Services. The
            foregoing license to Just One Penny is perpetual, worldwide,
            royalty-free, transferable as part of any transfer of the Services
            in whole or in part, and fully-paid up. Just One Penny also has the
            right to remove, at its sole discretion, any User Content from the
            Services at any time for any purpose, without any notice, and
            without any liability.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            2.4. The services provided by Just One Penny through the Services
            require the use of potentially copyrightable material such as
            photographs, video recordings, audio recordings, and works of
            authorship. Copyright owners or their authorized agents may submit a
            complaint of alleged copyright infringement to if they have a
            good-faith belief that their protected works are being infringed.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>3. CREATING AN ACCOUNT</SubHeading>
        <Text>
          <NumberedItemWrapper>
            3.1.As a Donee establishing an account, you must provide Just One
            Penny with your first and last name, the name of any organization
            you are representing, your organization’s zip code for your address
            of record, your organization’s logo, your organization’s mission
            statement, your organization’s Employer Identification Number (EIN),
            your organization’s revenue for the prior fiscal year, a description
            of your organization’s services, and a classification of your
            organization’s mission pursuant to Just One Penny’s classification
            method.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            3.2. You agree to provide and maintain true, accurate, current and
            complete information about yourself as prompted by the Services.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            3.3 To create an account, you are required to select an unique user
            identification ("User ID") and a secret word ("Password"). You may
            also be required to verify your identity.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            <BoldText>
              3.4. IF YOU ARE UNDER 18 YEARS OF AGE, YOU ARE NOT AUTHORIZED TO
              USE THE SERVICES, WITH OR WITHOUT REGISTERING.
            </BoldText>
          </NumberedItemWrapper>
        </Text>

        <SubHeading>
          4. E-SIGN AND ELECTRONIC COMMUNICATIONS DISCLOSURE
        </SubHeading>
        <Text>
          <NumberedItemWrapper>
            4.1. This section applies to Communications (defined below) between
            Users and Just One Penny that are not otherwise governed by separate
            terms and conditions. “Communications” means, and includes, but is
            not limited to, any emails, correspondence, agreements, contracts,
            or amendments thereto, disclosures, notices, updates, tax and
            accounting statements, transaction history, privacy policies, any
            legal and regulatory disclosures, communications associated with or
            available through the Service, all notices and disclosures about a
            change in this Agreement or a privacy policy, all contracts and
            agreements, all documents and information that the Service
            encompass, all other documents and information we deem necessary in
            our discretion, and all other documents and information related to
            the Service that Just One Penny provides to Users.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.2. When you affirmatively act to create an account to register via
            the Service, you consent and agree that we may provide you with any
            Communications in electronic format and that we may not send paper
            communications to you, unless and until you withdraw your consent as
            described below.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.3. All Communications that we provide to you in electronic form
            will be provided either via e-mail or by accessing your personal
            account on the Service. To receive an electronic copy of all
            communications you are must have and are solely responsible for
            having the following equipment and software: any device capable of
            accessing the Internet and the appropiate software to permit access
            to the documents.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.4. If you elect e-mail as your preferred communication method with
            Just One Penny, then you specifically agree to receive and/or obtain
            any/all communications via electronic delivery.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.5. You further agree that you must provide a valid e-mail address
            to Just One Penny and that you are solely responsible for
            maintaining the accuracy of any e-email address (and any other
            communication method). If you need to update your contact
            information, you may use the Service to do so, or contact us at the
            information provided below.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.6. You may withdraw your consent to receive certain Communications
            in electronic form by contacting us via the information provided
            below. Any withdrawal of your consent to receive electronic
            Communications will be effective only after we have a reasonable
            timeframe to process your withdrawal.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            4.7. We may treat your provision of an invalid email address or the
            subsequent malfunction of a previously valid address or cancellation
            of a Service as a withdrawal of your consent to receive electronic
            Communications.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>
          5. CONFIDENTIALITY OF YOUR USER ID AND PASSWORD, AND LIABILITY FOR
          UNAUTHORIZED ACCESS
        </SubHeading>
        <Text>
          <NumberedItemWrapper>
            5.1. Your User ID and Password are confidential and should not be
            disclosed to others or recorded on documentation or records located
            on or around your computer. You are responsible for the proper
            safekeeping of your User ID and Password. You agree not to disclose
            or otherwise make your User ID or Password available to anyone. You
            must notify Just One Penny immediately if your User ID or Password
            is lost or stolen, or if you suspect your User ID or Password is
            lost or stolen.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            5.2. You are responsible for all activity on your account. If you
            believe that your account is or could be accessed without your
            permission, notify Just One Penny immediately. If you cannot
            adequately safeguard your User ID and Password, your sole and
            exclusive remedy is to discontinue using the Service, and notifying
            Just One Penny.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            5.3. Disclosure of your User ID and/or Password is a violation of
            this Agreement. Upon notice or discovery of a violation of this
            Agreement, Just One Penny may terminate your access to the Service
            and may pursue redress of any harm caused by your violation of this
            Agreement through any legal means available. Just One Penny may also
            pursue criminal prosecution if you intentionally make or permit the
            making of a false record for or statement to Just One Penny in an
            attempt to defraud Just One Penny, or other Users.
          </NumberedItemWrapper>
        </Text>
        <SubHeading>6. PROHIBITED CONDUCT</SubHeading>
        <Text>
          <NumberedItemWrapper>
            6.1. You must not access or use the Service:
            <ul>
              <li>6.1.1. For any purposes that is unlawful;</li>
              <li>
                6.1.2. For any purpose that is not expressly permitted by this
                Agreement;
              </li>
              <li>
                6.1.3. In any manner that could damage, disable, overburden, or
                impair any Just One Penny computer system, server, or network;
              </li>
              <li>
                6.1.4. In any manner that interferes with any other person’s
                access or use of Service;
              </li>
              <li>
                6.1.5. In an attempt to gain unauthorized access to another
                User’s account;
              </li>
              <li>
                6.1.6. Using any device, a robot, spider, script, automated
                process, or manual process or other means to harvest information
                about other Users, or any content from Service;
              </li>
              <li>
                6.1.7. Transmit, install, upload or otherwise transfer any
                material (or User Content) to the Service that:
                <ul>
                  <li>
                    6.1.7.1. In any way that affects the use, enjoyment of the
                    Service by any Users;
                  </li>
                  <li>
                    6.1.7.2. Is fraudulent, inaccurate, offensive, violent,
                    lewd, salacious, explicit, discriminatory, illegal,
                    infringing, hateful, pornographic or sexually suggestive
                    (which Just One Penny reserves the sole discretion to
                    determine the nature of the material); or
                  </li>
                  <li>
                    6.1.7.3. Violates or infringes the intellectual property
                    rights of others (including but not limited to copyrights,
                    trademarks, trade secrets, patents and publicity rights).
                  </li>
                </ul>
              </li>
            </ul>
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            6.2. Donations will not be accepted that, and Donees may not be
            eligible to receive Donations that:
            <ul>
              <li>
                6.2.1. Violate any law, regulation, industry requirement, or
                third-party guidelines or agreements by which you are bound,
                including those of payment card providers and transaction
                processors that you utilize in connection with the Services;
              </li>
              <li>
                6.2.2. Are fraudulent, misleading, inaccurate, dishonest, or
                impossible;
              </li>
              <li>
                6.2.3. Sponsor, advocate, or otherwise promote illegal
                activities; and
              </li>
              <li>
                6.2.4. May be considered gambling, betting, gaming and/or any
                other activity and other ventures that facilitate gambling,
                games of skill or chance (whether or not it is legally defined
                as a lottery), promotions involving monetary rewards, including
                gift cards, or sweepstakes.
              </li>
            </ul>
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            6.3. You may not make or accept Donations that, Just One Penny, in
            its sole discretion, may deem to be unacceptable.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>7. DONATIONS AND PAY SERVICES</SubHeading>
        <Text>
          <NumberedItemWrapper>
            7.1. Just One Penny is not a bank, money transmitter, or other money
            services business, as defined by the Bank Secrecy Act or state
            banking law. The relationship of Just One Penny to each Donee shall
            also be governed pursuant to the rules applicable payment card
            processors (e.g. Visa, Mastercard, American Express, Discover,
            etc.).
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.2. If Just One Penny or one of our payments processors at any time
            discovers that the information you provided about you or the
            payments processors’ terms, you may be banned from using the
            Services and your Donations suspended. You acknowledge and agree
            that the use of third party payment processors are integral to the
            Services and that we may exchange information with such third
            parties in order to facilitate the provision of Services as set out
            in our privacy policy.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.3. Donees agree that Just One Penny may, in its sole and absolute
            discretion, offer a refund to a Donor for a Payment in the event
            that the Donor provided it to an incorrect Donee, the Donee
            organization is fraudulent, or in other situations where Just One
            Penny determines in its sole discretion that the transaction should
            be refunded.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.4. Just One Penny is not liable to you or to any third party for
            any claims, damages, costs, losses, or other consequences caused by
            Just One Penny issuing refunds, including, but not limited to
            transaction or overdraft fees.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.5. Donees acknowledge and agree that any Donations received by a
            Donee, shall be settled to Donees, less applicable fees by credit
            card processors, automated clearing house (“ACH”) transactions,
            and/or fees charged by our payment processor Stripe, pursuant to the
            rules and regulations of NACHA or by such other means as Just One
            Penny may elect to use.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.6. Just One Penny does not guarantee that any Donations will be
            available to Donees within any specific time frame. Just One Penny
            expressly disclaims any and all responsibility for any delay or
            inability to access and use Donations at any specified time, and any
            consequences arising from such delay or inability.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.7. Donees are solely responsible for ensuring that any information
            provided to Just One Penny to withdraw Donations, including bank
            account information, is accurate and up to date.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            7.8. Just One Penny may, at any time, for any reason, without
            notice, and in its sole discretion, offer or issue a refund of
            Donation(s) with or without consulting with Donees, which may
            comprise the entire amount donated to a Donee.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>
          8. LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES
        </SubHeading>
        <Text>
          <NumberedItemWrapper>
            8.1. UNDER NO CIRCUMSTANCES SHALL JUST ONE PENNY OR ANY OF ITS
            EMPLOYEES, AGENTS, VENDORS OR SUPPLIERS BE LIABLE FOR ANY DIRECT OR
            INDIRECT LOSSES OR DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR
            USE OR INABILITY TO USE THE SERVICE; THE DISCLOSURE OR MISUSE OF
            INFORMATION OBTAINED USING YOUR USER ID AND/OR PASSWORD; USE OF YOUR
            PERSONAL COMPUTING DEVICE TO ACCESS SERVICE; ANY ERRORS,
            INACCURACIES, OR CHANGES TO THE INFORMATION OBTAINED BY ACCESSING
            YOUR ACCOUNT; ANY INTERRUPTION OR ERRORS IN FUNCTIONING,
            IMPOSSIBILITY OF ACCESS, OR POOR USE CONDITIONS OF SERVICE; OR
            STATEMENTS OR CONDUCT OF ANY USER OR THIRD PARTY ON JUST ONE PENNY,
            INCLUDING WITHOUT LIMITATION UNAUTHORIZED ACCESS TO OR ALTERATION OF
            TRANSMISSIONS OR DATA, MALICIOUS OR CRIMINAL BEHAVIOR, OR FALSE OR
            FRAUDULENT TRANSACTIONS.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.2. This is a comprehensive limitation of liability that applies to
            all losses and/or damages of any kind, including general, special,
            consequential, incidental, exemplary or otherwise, and including,
            without limitation, loss of data, income, or profits, whether in
            contract, negligence or other tortious action, even if an authorized
            representative of Just One Penny has been advised of or should have
            known of the possibility of such damages.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.3. THE SERVICES AND ANY INFORMATION AND MATERIALS PROVIDED VIA THE
            SERVICES ARE PROVIDED ON AN “AS IS,” “AS AVAILABLE” AND "WITH ALL
            FAULTS" BASIS, WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES INCLUDING,
            BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON- INFRINGEMENT. JUST ONE PENNY
            MAKES NO REPRESENTATIONS, WARRANTIES, CONDITIONS OR GUARANTEES AS TO
            THE USEFULNESS QUALITY, SUITABILITY, TRUTH, ACCURACY OR COMPLETENESS
            OF SERVICE, ANY CONTENT ON THE SERVICES.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.4. JUST ONE PENNY MAKES NO WARRANTY OR REPRESENTATION THAT: (A)
            THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR- FREE;
            (B) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF SERVICE WILL BE
            ACCURATE OR RELIABLE; (C) THE QUALITY OF ANY PRODUCTS, SERVICES,
            SERVICES CONTENT, INFORMATION, OR OTHER MATERIAL OBTAINED FROM
            SERVICE WILL MEET YOUR EXPECTATIONS OR REQUIREMENTS; OR (D) ANY
            ERRORS IN SERVICE WILL BE CORRECTED. IN PARTICULAR, JUST ONE PENNY’S
            OPERATION MAY BE MOMENTARILY INTERRUPTED DUE TO MAINTENANCE,
            UPDATES, OR TECHNICAL IMPROVEMENTS.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.5. YOU ASSUME ALL RISK FOR FINANCIAL LOSS, LOST DONATIONS, ANY
            DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM
            USING ANY SERVICES.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.6. JUST ONE PENNY IS NOT RESPONSIBLE, AND MAKES NO REPRESENTATIONS
            OR WARRANTIES FOR THE DELIVERY OF ANY MESSAGES (SUCH AS EMAILS, OR
            TEXT MESSAGES) SENT BY JUST ONE PENNY TO ANYONE. IN ADDITION, WE
            NEITHER WARRANT NOR REPRESENT THAT YOUR USE OF SERVICE WILL NOT
            INFRINGE THE RIGHTS OF THIRD PARTIES. ANY MATERIAL, SERVICE, OR
            TECHNOLOGY DESCRIBED OR USED ON SERVICE MAY BE SUBJECT TO
            INTELLECTUAL PROPERTY RIGHTS OWNED BY THIRD PARTIES WHO HAVE
            LICENSED TO US SUCH MATERIAL, SERVICE, OR TECHNOLOGY.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.7. JUST ONE PENNY DOES NOT HAVE ANY OBLIGATION TO VERIFY THE
            IDENTITY OF THE PERSONS USING THE SERVICE; THEREFORE, JUST ONE PENNY
            DECLINES ALL LIABILITY FOR INACCURA TE INFORMA TION; FRAUD;
            NEGLIGENCE; WILLFUL MISCONDUCT; OR ANY OTHER INAPPROPRIATE USE OF
            SERVICE.
          </NumberedItemWrapper>
          <NumberedItemWrapper>
            8.8. Just One Penny does not guarantee and is not obligated to
            guarantee the availability, accessibility, or usability of the
            Services. Just One Penny, in our sole discretion, may interrupt the
            availability, accessibility, or usability of Service, without
            notice, at any time, without any liability.
          </NumberedItemWrapper>
        </Text>

        <SubHeading>9. INDEMNITY</SubHeading>
        <Text>
          YOU AGREE TO DEFEND, INDEMNIFY AND HOLD HARMLESS JUST ONE PENNY AND
          ITS EMPLOYEES, AGENTS, VENDORS OR SUPPLIERS, AND REPRESENTATIVES FROM
          ANY CLAIM OR DEMAND, INCLUDING ATTORNEY’S FEES, MADE BY ANY THIRD
          PARTY TO OR ARISING OUT OF YOUR USE OF THE SERVICE, OR YOUR USE OF OR
          CONNECTION TO JUST ONE PENNY (INCLUDING ANY USE BY YOU ON BEHALF OF A
          THIRD PARTY), AND ANY REPRESENTATIONS OR WARRANTIES UNDER THIS
          AGREEMENT. WE RESERVE THE RIGHT, AT OUR OWN EXPENSE, TO PARTICIPATE IN
          OR ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER OTHERWISE
          SUBJECT TO INDEMNIFICATION BY YOU, IN WHICH EVENT YOU WILL COOPERATE
          WITH US IN ASSERTING ANY AVAILABLE DEFENSES.
        </Text>

        <SubHeading>10. TERMINATION OF SERVICE</SubHeading>
        <Text>
          WE RESERVE THE RIGHT TO DENY SERVICE TO ANYONE, AT ANY TIME, AND FOR
          ANY REASON, AS ALLOWED BY LAW, OR FOR ANY OTHER REASON.
          <br />
          <br />
          We also reserve the right, at our sole discretion, to discontinue any
          service or modify any Service without notice, at any time, and without
          liability. We reserve the right, at our sole discretion, to deactivate
          your account. We shall not be liable to you or any third party if we
          terminate your account, deny service, discontinue service, or modify
          any service, and you agree to hold us harmless and indemnify us from
          any third party claims arising from the termination of your account.
          <br />
          <br />
          You also reserve the right to terminate your use of the Just One Penny
          platform at your discretion. This can be accomplished by contacting
          Just One Penny via the information below, and at such time Just One
          Penny will remove your account within a reasonable timeframe.
        </Text>

        <SubHeading>11. TERMS AND CONDITIONS MAY CHANGE</SubHeading>
        <Text>
          We reserve the right to update this Agreement by prominently posting
          notice of the update on our Services. Unless otherwise noted, any
          updates will become effective thirty (30) days after posting the
          updates to the Terms, and apply to all information collected about
          you. If we make any changes to this Agreement that materially impact
          previously collected information about you, we will, to the extent
          that we have your email address, notify you by email.
        </Text>

        <SubHeading>12. THIRD PARTY CONTENT</SubHeading>
        <Text>
          You may find links to other Internet sites or resources on the
          Services. You acknowledge and agree that Just One Penny is not
          responsible for the availability of such external sites or resources,
          and does not endorse and is not responsible or liable for any the
          Services Content, advertising, products, or other materials on or
          available from such sites or resources. Just One Penny will not be
          responsible or liable, directly or indirectly, for any actual or
          alleged damage or loss caused by or in connection with use of or
          reliance on any such the Services Content, goods or services available
          on or through any such site or resource.
        </Text>

        <SubHeading>13. GOVERNING LAW AND CHOICE OF FORUM</SubHeading>
        <Text>
          This Agreement shall be governed by, construed, and enforced in
          accordance with the laws of the State of Indiana. The sole, exclusive
          and mandatory venue for any disputes arising from or concerning this
          Agreement shall be in Marion County, Indiana.
        </Text>

        <SubHeading>14. ENTIRE AGREEMENT</SubHeading>
        <Text>
          This Agreement contains the full understanding between the parties and
          supersedes all prior representations or agreements, whether oral or
          written, with respect to such matters. If any provision of these Terms
          of Use is held invalid by any law or regulation of any government, or
          by any court, the parties agree that such provision will be replaced
          with a new provision that accomplishes the original business purpose,
          and the other provisions of the Terms of Use will remain in full force
          and effect.
        </Text>

        <SubHeading>15. CONTACT US</SubHeading>
        <Text>
          If you need to contact us, you may do so via:
          <br />
          Email: greg@justonepenny.org
          <br />
          Mail: 1020 E Palmer St, Indianapolis, IN 46203 USA
        </Text>
        <SubHeading>
          16. AGREEMENT TO CONDUCT TRANSACTION ELECTRONICALLY
        </SubHeading>
        <Text>
          By selecting “I Agree” at the end of this document, you are signing
          this Agreement electronically and you agree that you will be legally
          bound by these Terms of Use.
        </Text>
      </SubHeaderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Avenir;
  color: #333;
  padding: 2.75rem 1.5rem;
`;

const Header = styled.div`
  padding-bottom: 1.7rem;
  border-bottom: 0.25px solid #9fa2a8;
  margin-bottom: 1.7rem;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 0.875rem;
`;

const SubHeaderWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

const Heading = styled.h2`
  font-weight: 900;
  text-align: center;
  font-size: 1.75rem;

  @media only screen and (max-width: 475px) {
    font-size: 1.25rem;
  }
`;

const SubText = styled.p`
  font-size: 0.875rem;
  text-align: center;

  & span {
    font-weight: 500;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;

  @media only screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
`;

const NumberedItemWrapper = styled.div`
  margin-bottom: 0.875rem;

  & ul {
    list-style-type: none;
    width: 85%;
    margin: 1rem auto;
    & li {
      margin-bottom: 0.5rem;
    }
  }
`;

const BoldText = styled.span`
  font-weight: 700;
`;
