/**
 *
 * TermsOfService
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export function TermsOfService(props: Props) {
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
        <SubHeading>INTRODUCTION AND SCOPE</SubHeading>
        <Text>
          JUST ONE PENNY, INC. (“Just One Penny,” “we,” “us,” “our”) is pleased
          to welcome you to www.justonepenny.org (the “Site”). The following
          Terms of Use Agreement (the “Terms of Use,” the “Terms,” or the
          “Agreement”) applies to visitors and users of the Site (“users,” “you,
          “your”). Please review the following Agreement carefully. YOUR USE OF
          THE SITE AND ANY SERVICES PROVIDED THEREIN IS CONDITIONED UPON YOUR
          COMPLIANCE AND ACCEPTANCE OF THESE TERMS. The Terms of Use is a legal
          contract between you and Just One Penny related to services for
          not-for-profit organizations, such as charitable organizations,
          religious organizations, not for profit events, and fundraisers (each,
          a “Donee”)—to receive payments made by users of the Site (each, a
          “Donor”), (collectively, the “Service”). YOU ARE ONLY ALLOWED TO USE
          THE SERVICE IF YOU CAN ENTER INTO A BINDING CONTRACT WITH JUST ONE
          PENNY. BY REGISTERING TO USE THE SERVICE, OR BY INSTALLING, COPYING,
          OR OTHERWISE USING THE SERVICE, YOU AGREE TO BE BOUND BY THE TERMS OF
          USE, INCLUDING THE WARRANTY DISCLAIMERS, LIMITATIONS OF LIABILITY, AND
          TERMINATION PROVISIONS BELOW. IF YOU DO NOT AGREE TO THE TERMS OF USE,
          DO NOT INSTALL OR USE THIS APPLICATION OR THE SERVICE AND EXIT NOW. IF
          YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, IMMEDIATELY STOP
          ACCESSING THE SITE AND DO NOT USE ANY JUST ONE PENNY SERVICE OFFERED
          THROUGH THE SITE.
        </Text>
      </SubHeaderWrapper>

      <SubHeaderWrapper>
        <SubHeading>PRIVACY POLICY</SubHeading>
        <Text>
          We respect the privacy of our users. Please refer to our Privacy
          Policy which explains how we collect, use, and disclose information
          that pertains to your privacy. When you access or use the Site, you
          signify your agreement to the Privacy Policy as well as these Terms of
          Use.
        </Text>
      </SubHeaderWrapper>

      <SubHeaderWrapper>
        <SubHeading>TERMS AND CONDITIONS</SubHeading>
        <Text>
          <NumberedItemWrapper>
            <NumberedItem>1. Acceptance of the Terms.</NumberedItem>
            These Terms of Use apply to the use of this site. We reserve the
            right to change these Terms of Use from time to time at our sole
            discretion and for any reason. Your use of this Site will be subject
            to the most current version of the Terms of Use posted on the Site
            at the time of such use. In addition, when using particular
            information or services on this Site, you shall be subject to any
            posted guidelines or rules or agreements applicable to such
            information or services that may contain terms and conditions in
            addition to those in the Terms of Use. All such guidelines or rules
            are hereby incorporated by reference into the Terms of Use. If you
            breach any of the Terms of Use, your authorization to use this Site
            automatically terminates and you must immediately destroy any
            information downloaded or printed from this Site. We reserve the
            right to refuse service, terminate accounts, and/or cancel requests
            in its discretion, including, without limitation, if we believe that
            user conduct violates applicable law or is harmful to the interests
            of Just One Penny.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>2. Services Provided.</NumberedItem>
            The Just One Penny software and other technologies have been
            designed, architected and developed by Just One Penny, Inc. Just One
            Penny provides services for not-for-profit organizations, such as
            charitable organizations, religious organizations, not for profit
            events, and fundraisers (each, a “Donee”)—to receive payments made
            by users of the Site (each, a “Donor”). Pursuant to this Agreement,
            Donee appoints Just One Penny as its agent for receipt of payments
            from Donor (each a “Payment”). Donee represents that it has
            authorization to receive Payments from Donor and that Payments
            receive by Donee hereunder are only pursuant to that authorization.
            Just One Penny is not an agent of Donor in receiving Payments. Just
            One Penny is not a bank, money transmitter, or other money services
            business, as defined by the Bank Secrecy Act or state banking law.
            The relationship of Just One Penny to each Donee shall also be
            governed pursuant to the rules and regulations of each respective
            donor’s credit card (Mastercard, Visa, Discover, etc.) where Just
            One Penny is a payment facilitator or payment connect and the Donee
            is a merchant (collectively, the “Rules”). No Payments will occur
            hereunder to any Donee that is not a party to this Agreement. We
            directly, or indirectly through an unaffiliated Internet service
            provider, shall provide you with electronic access, through your
            computer or other electronic device (collectively “Computer”), to
            the information and services provided on the Site and the ability to
            communicate electronically with the Site.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>3. Use Restrictions.</NumberedItem>
            The Site is a general purpose website and is not targeted towards
            children under 13 years of age (or under 16 years of age for
            California residents). By registering an account on the Site, you
            represent and warrant that you are (i) 18 years of age or older and
            (ii) have not previously been suspended or removed from the use of
            the Site by us. If we become aware that you are under 18, we will
            terminate your registration. Your permission to use the Site is
            conditioned upon the following use, posting, and conduct
            restrictions. You agree that you will not under any circumstances:
            <Restrictions>
              <li>
                Access the Site for any reason other than your personal,
                non-commercial use solely as permitted by the normal
                functionality of the Site;
              </li>

              <li>
                Collect or harvest any personal data of any user of the Site;
              </li>

              <li>
                Use the Site for any unlawful purpose or for the promotion of
                illegal activities;
              </li>

              <li>
                Attempt to, or harass, abuse, or harm another person or group;
              </li>

              <li>
                Provide false or inaccurate information when registering an
                account;
              </li>

              <li>
                Interfere or attempt to interfere with the proper functioning of
                the Site;
              </li>

              <li>
                Make any automated use of the Site, or take any action that we
                deem to impose or to potentially impose an unreasonable or
                disproportionately large load on our servers or network
                infrastructure;
              </li>

              <li>
                Bypass any robot exclusion headers or other measures we take to
                restrict access to the Site, or use any software, technology, or
                device to scrape, spider, or crawl the Services or harvest or
                manipulate data;
              </li>

              <li>
                Circumvent, disable, or otherwise interfere with any
                security-related features of the Site or features that prevent
                or restrict use or copying of content, or enforce limitations on
                use of the Site or the content accessible via the Site; or
              </li>

              <li>
                Transmit, upload, publish, or link to the Site any virus, worm,
                defect, Trojan horse, software bomb, or other malicious feature
                designed to damage, degrade, or disrupt in any manner the
                performance of the Site or another user’s browser or computer.{' '}
              </li>
            </Restrictions>
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>4. Registration and Accounts.</NumberedItem>
            Only you may use your Just One Penny account. You agree to keep your
            accounts and passwords confidential at all times and not authorize
            any third party to access or use Just One Penny on your behalf,
            including providing your account information to third-party websites
            to access your Just One Penny account. You are responsible for all
            activity that takes place within your account. At any time, Just One
            Penny, in its sole discretion, may disable or delete any account
            registered on the Site for any reason. By registering to the Site,
            you agree to provide any verification information as required by
            Just One Penny to comply with various United States laws. You agree
            to be bound by policies of third parties including networks, bank
            card associations and banks used to process payments. You agree to
            forever release and hold Just One Penny harmless from any cost,
            damage, or other injury that may arise out of the relationship
            between you and your financial institution or otherwise out of your
            agreement with your institution. Some third parties may require a
            direct agreement with a Donee. If a direct agreement between such
            third party and a particular Donee is required, Just One Penny will
            make reasonable efforts to facilitate the execution of such
            agreements between both parties. Just One Penny reserves the right
            to disable or delete a Donee’s account if Donee is unable to enter
            into a direct agreement with third party, as required by the policy
            of said third party. If at any time a Donor or Donee wishes to
            disable their account, they may email greg@justonepenny.org. Such
            accounts will then be disabled within 48 hours of notice. Any
            pending payments will be processed as per the policy of Stripe. Just
            One Penny reserves the right to retain contact information of such
            Donors and Donees for its communication purposes.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>5. License and User Conduct.</NumberedItem>
            Just One Penny grants you a limited license to access and make
            personal use of this Site. However, you may not download or modify
            the Site, or any portion of the Site, except with express written
            consent of Just One Penny. This Site may not be reproduced,
            duplicated, copied, sold, resold, visited, or otherwise exploited
            for any commercial purpose without express written consent of Just
            One Penny. Any unauthorized use of the Site shall automatically
            terminate the license granted to you by Just One Penny for such use.
            You are required to abide by all applicable international, federal,
            state and local laws and regulations in your use of this Site. Just
            One Penny may terminate your use of the Site in Just One Penny’s
            sole discretion for any reason. If you are under eighteen (18) years
            of age, you may not use the Site.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>6. Donations.</NumberedItem>
            <LetteredItemWrapper>
              <LetteredItem>
                a. <span>Donor Refunds.</span>
              </LetteredItem>
              <LetteredItemText>
                Donee agrees that Just One Penny may, in its sole and absolute
                discretion, offer a refund to a Donor for a Payment in the event
                that the donor provided it to an incorrect organization, the
                organization is fraudulent, or in other situations where Just
                One Penny determines in its sole discretion that the transaction
                should be refunded. Except as otherwise set forth herein, to be
                eligible for a refund, Donors must submit a request within
                thirty (30) days of providing any Payment, to
                greg@justonepenny.org with the Subject “Refund Request” and
                include the purchaser’s Just One Penny username and transaction
                information. Just One Penny will make commercially reasonable
                efforts to respond within ten (10) days of any such request but
                does not guarantee that the refund will occur. After such ten
                (10) day period, if the matter is not resolved to the entire
                satisfaction of the Donor, Donor shall address Donee directly
                and Just One Penny shall have no liability in respect of the
                Payment except and to the extent required under the Rules.
              </LetteredItemText>
            </LetteredItemWrapper>

            <LetteredItemWrapper>
              <LetteredItem>
                b. <span>Disbursements.</span>
              </LetteredItem>
              <LetteredItemText>
                Payments received by Donee, through its agent Just One Penny,
                shall be settled to Donees, less applicable Fees by automated
                clearing house (“ACH”) transaction, pursuant to the rules and
                regulations of NACHA or by such other means as Just One Penny
                may elect to use. Donee shall receive all funds directly in its
                account with Stripe, the payment processor, minus applicable
                fees deriving from payment transaction and Stripe platform fees.
                Just One Penny will not charge any fees or take any percentage
                of the funds donated to Donee.
              </LetteredItemText>
            </LetteredItemWrapper>
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>7. Payments.</NumberedItem>
            <LetteredItemWrapper>
              <LetteredItem>
                a. <span>Connected Accounts.</span>
              </LetteredItem>
              <LetteredItemText>
                Just One Penny offers donation services to charities through our
                third-party payment processor, Stripe. All charities and/or
                nonprofit organizations that seek to use the Just One Penny
                platform must register with Stripe as a merchant. You are
                subject to both the Stripe Connected Account Agreement and the
                Stripe Services Agreement, and hereby agree to be bound by these
                agreements and to acknowledge that Stripe may, at its own
                discretion, modify the verbiage contained in these agreements.{' '}
                Stripe may, when appropriate and applicable, provide payment
                processing services that transmit funds from users’ credit cards
                and bank accounts to the Stripe account of Donee. As a condition
                of partnering with Just One Penny to facilitate payments to your
                Stripe account, you agree to provide Just One Penny with
                information that is truthful, accurate and complete, and you
                acknowledge that Just One Penny may, at its discretion, share
                this information with Stripe, along with any information related
                to your use of Stripe’s services. Just One Penny is not
                responsible for any services provided by Stripe or for the
                performance of Stripe’s application. Just One Penny is not
                responsible for the amount of funding raised on our platform by
                Donee, and we make no guarantee regarding the size or frequency
                of potential donations that Donee can expect on our platform.
              </LetteredItemText>
            </LetteredItemWrapper>
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>
              8. Websites and Services Powered by Third Parties.
            </NumberedItem>
            As part of the Site, we may provide you with convenient links to
            third party website(s) (“Third Party Sites”) as well as content or
            items belonging to or originating from third parties (the “Third
            Party Applications, Software, or Content”). These links are provided
            as a courtesy. We have no control over Third Party Sites or Third
            Party Applications, Software, or Content, or the promotions,
            materials, information, goods, or service available on these Third
            Party Sites or Third Party Applications, Software, or Content. Such
            Third Party Sites and Third Party Applications, Software, or Content
            are not investigated, monitored or checked for accuracy,
            appropriateness, or completeness, and we are not responsible for any
            Third Party Sites accessed through our Site or any Third Party
            Applications, Software, or Content posted on, available through or
            installed from our Site, including the content, accuracy,
            offensiveness, opinions, reliability, safety, privacy practices, or
            other policies of or contained in the Third Party Sites or the Third
            Party Applications, Software, or Content. Inclusion of, linking to
            or permitting the use or installation of any Third Party Site or any
            Third Party Applications, Software, or Content does not imply our
            approval or endorsement. If you decide to leave our Site and access
            the Third Party Sites or to use or install any Third Party
            Applications, Software, or Content, you do so at your own risk and
            you should be aware that our terms and policies, including these
            Terms of Use, no longer govern. You should review the applicable
            terms and policies, including privacy and data gathering practices,
            of any Third Party Site to which you navigate from our Site or
            relating to any applications you use or install from the Third Party
            Site.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>9. Intellectual Property Rights.</NumberedItem>
            You acknowledge and agree that we and our licensors retain ownership
            of all intellectual property rights of any kind related to the Site,
            including applicable copyrights, trademarks, and other proprietary
            rights. The trademarks, trade names, logos and service marks
            (“Marks”) displayed on the Site and the features and functionality
            of the Site are the property of Just One Penny or its affiliates or
            licensors and are protected by applicable copyright, patent,
            trademark or other intellectual property law. All information and
            content made available on or through the site (“Content”) is
            protected by copyrights. Other product and company names that are
            mentioned on the Site may carry registered or other trademarked
            symbols that are the sole property of their respective owners. You
            may view, print, and download portions of the content and/or
            information of the Site solely in connection with your use of the
            Site, and solely for your personal use or records. We reserve the
            right to revoke this authorization at any time. Reproduction,
            copying, or redistribution of materials on the Site for commercial
            purposes is strictly prohibited without our express written
            permission. In printing or downloading content and/or information
            from the Site, you agree not to change or delete any proprietary
            notices, trademarks, and the like from any printed or downloaded
            content and/or information. Except as otherwise provided in these
            Terms of Use or as consented to in writing by us, you may not
            modify, copy, distribute, transmit, display, perform, reproduce,
            publish, license, create derivative works from, frame in another web
            page, use on any other website, transfer, or sell any content and/or
            information appearing on the Site. Furthermore, you may not attempt
            to view, disclose, copy, reverse engineer, disassemble, decompile,
            or otherwise examine the Site source code. If you make use of the
            Site other than as authorized herein, you may be in violation of
            copyright laws and other laws of the United States and other
            countries, as well as applicable state laws, and may be subject to
            penalties and/or legal or equitable remedies available to us or our
            licensors. Without limiting the foregoing, you also agree not to use
            the Marks, Services, Content, or Information for any unlawful
            purpose, and you shall comply with any request of Just One Penny or
            its affiliates or licensors to protect their respective rights in
            the Marks, Services and Information. We will file appropriate legal
            actions to enjoin the unauthorized use of Marks, Services, Content,
            or Information. Under the law, we would be entitled to collect your
            profits, our actual damages, and, perhaps, our attorney fees. We
            thank you for your cooperation.
            <br />
            <br />
            When you upload, submit, or store any content (“User Content”)
            through the Site, you grant Just One Penny a worldwide license to
            use, host, store, reproduce, modify, and create derivative works
            from the User Content to provide, support, and improve the Site. You
            acknowledge that User Content and information regarding your account
            will be processed by Just One Penny and stored and processed using
            online hosting services selected by Just One Penny.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>
              10. Prohibited Communications and Other Activities.
            </NumberedItem>
            Just One Penny may, but is not obligated to, monitor or review (i)
            any areas on the Site where users transmit or post communications or
            communicate solely with each other, and (ii) the content of any such
            communications. Just One Penny, however, will have no liability
            related to the content of any such communications, whether or not
            arising under the laws of copyright, libel, privacy, obscenity or
            otherwise. You are prohibited from posting or transmitting to or
            from this Site any unlawful, threatening, libelous, defamatory,
            obscene, pornographic or other material that would violate any law.
            Just One Penny reserves the right (but not the obligation) to remove
            or edit such content. You may not use a false e-mail address,
            impersonate any person or entity, or otherwise mislead.
            <br />
            <br />
            If you do post content or submit material, and unless we indicate
            otherwise, you grant Just One Penny a nonexclusive, royalty-free,
            perpetual, irrevocable, and fully sublicensable right to use,
            reproduce, modify, adapt, publish, translate, create derivative
            works from, distribute, and display such content throughout the
            world in any media. You grant Just One Penny and sublicensees the
            right to use the name that you submit in connection with such
            content, if they choose. You represent and warrant that you own or
            otherwise control all of the rights to the content that you post;
            that the content is accurate; that use of the content you supply
            does not violate this policy and will not cause injury to any person
            or entity; and that you will indemnify Just One Penny for all claims
            resulting from content you supply. Just One Penny takes no
            responsibility and assumes no liability for any content posted by
            you or any third party.
            <br />
            <br />
            Other prohibited activities on the Site include, but are not limited
            to: (1) using a robot, spider, script, automated process, or manual
            process to “scrape” the Site’s listings or content; (2) taking any
            action that imposes an unreasonable or disproportionately large load
            on Just One Penny’s hardware or software infrastructure; (3) sending
            SPAM to Just One Penny users or others; (4) attempting to reverse
            engineer, decompile, disassemble or otherwise obtain the source code
            to the Site; (5) engaging in or promoting any illegal activities;
            (6) engaging in any activity that markets another business or
            attracts Just One Penny customers to a third party; (7) submitting
            Content that is offensive, obscene, harmful to minors, illegal,
            abusive, threatening, defamatory, or misleading; or (8) using the
            services if you are or wish to assist a person or entity who is on a
            Specially Designated National List of the U.S. Department of the
            Treasury Office of Foreign Asset Control (“OFAC”) or otherwise
            prohibited from accessing the U.S. financial system. All Donees must
            be registered 501(c)(3) entities eligible to receive tax deductible
            charitable contributions.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>11. Electronic Recording.</NumberedItem>
            You acknowledge and agree that all information and data that you
            input during your use of the Site, including without limitation, all
            selections and uses of tools included therein, and all information
            you have created, input or developed in connection with your use of
            the Site (the “User Information”), shall be deemed to become, and
            shall remain, the property of Just One Penny. None of the User
            Information shall be subject to any obligation of confidentiality on
            the part of Just One Penny or its officers, directors, owners,
            agents, employees, affiliates, or licensors (“Related Parties”), and
            neither Just One Penny nor its Related Parties shall be liable for
            any use or disclosure of all or part of any User Information.
            Without limiting the foregoing, Just One Penny shall exclusively own
            all now known or hereafter existing rights to the User Information
            of every kind and nature throughout the world, and shall be entitled
            to unrestricted use of the User Information for any purpose
            whatsoever, commercial or otherwise, without compensation to the
            provider of the User Information.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>
              12. Disclaimers and Limitation of Liability.
            </NumberedItem>
            EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, ALL INFORMATION AND
            SERVICES ON THIS SITE, INCLUDING THE SITE, ITS CONTENTS, AND ANY
            LINKS PROVIDED ON THE SITE, ARE PROVIDED ON AN “AS IS” BASIS, AND WE
            DISCLAIM ALL WARRANTIES OF ANY KIND AND JUST ONE PENNY AND ITS
            RELATED PARTIES HEREBY EXPRESSLY DISCLAIM ALL EXPRESS AND IMPLIED
            WARRANTIES, INCLUDING WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND THE WARRANTY
            OF NON-INFRINGEMENT OR TITLE. YOU ACKNOWLEDGE AND ASSUME THE RISKS
            INHERENT FROM THE USE OF THE MATERIALS ON THIS SITE, AND YOU ASSUME
            FULL RESPONSIBILITY FOR ALL COSTS THAT ARISE OUT OF ITS USE. WITHOUT
            LIMITING THE FOREGOING, JUST ONE PENNY AND ITS RELATED PARTIES MAKE
            NO WARRANTY THAT (I) THE INFORMATION AND SERVICES WILL MEET YOUR
            REQUIREMENTS, (II) THE SERVICES AND INFORMATION WILL BE
            UNINTERRUPTED, TIMELY, SECURE, COMPLETE OR ERROR-FREE, (III) ANY
            DEFECTS WILL BE CORRECTED, (IV) THE RESULTS THAT MAY BE OBTAINED
            FROM THE USE OF THE SERVICE OR INFORMATION WILL BE ACCURATE OR
            RELIABLE, (V) THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, AND (VI) THE QUALITY OF
            ANY SERVICES OR INFORMATION PURCHASED OR OBTAINED BY YOU FROM THE
            SITE WILL MEET YOUR EXPECTATIONS. INFORMATION ON THIS SITE MAY
            CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS. JUST ONE
            PENNY AND ITS RELATED PARTIES MAY MAKE CHANGES TO THE INFORMATION
            AND SERVICES AT THIS SITE, AT ANY TIME AND FOR ANY REASON WITHOUT
            NOTICE. THE INFORMATION AND SERVICES AT THIS SITE MAY BE OUT OF
            DATE, AND JUST ONE PENNY AND ITS RELATED PARTIES MAKE NO COMMITMENT
            TO UPDATE SUCH INFORMATION OR SERVICES.
            <br />
            <br />
            SOME STATES DO NOT PERMIT LIMITATIONS OR EXCLUSIONS OF IMPLIED
            WARRANTIES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            <br />
            <br />
            LINKS TO OTHER THIRD-PARTY WEBSITES NOT OWNED OR CONTROLLED BY JUST
            ONE PENNY MAY BE AVAILABLE FOR ACCESS THROUGH THIS WEBSITE. SUCH
            EXTERNAL THIRD-PARTY INTERNET ADDRESSES CONTAIN INFORMATION CREATED,
            PUBLISHED, MAINTAINED, OR OTHERWISE POSTED BY ORGANIZATIONS
            INDEPENDENT OF JUST ONE PENNY. JUST ONE PENNY DOES NOT ENDORSE,
            APPROVE, CERTIFY, WARRANT, OR OTHERWISE ASSUME RESPONSIBILITY FOR
            ANY INFORMATION, CONTENT, PRODUCT, OR SERVICE REFERENCED OR PROVIDED
            AT SUCH ADDRESSES. JUST ONE PENNY ENCOURAGES YOU TO BE AWARE WHEN
            YOU LEAVE THE WEBSITE AND TO READ THE TERMS AND CONDITIONS AND
            PRIVACY POLICY OF EACH OTHER WEBSITE THAT YOU VISIT.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>13. Limitation of Liability.</NumberedItem>
            JUST ONE PENNY AND ITS RELATED PARTIES SHALL NOT BE LIABLE FOR ANY
            HARM CAUSED BY THE TRANSMISSION, THROUGH THE SERVICES OR
            INFORMATION, OF A COMPUTER VIRUS, OR OTHER COMPUTER CODE OR
            PROGRAMMING DEVICE THAT MIGHT BE USED TO ACCESS, MODIFY, DELETE,
            DAMAGE, CORRUPT, DEACTIVATE, DISABLE, DISRUPT, OR OTHERWISE IMPEDE
            IN ANY MANNER THE OPERATION OF THE SITE OR ANY OF YOUR SOFTWARE,
            HARDWARE, DATA OR PROPERTY. EXCEPT AS OTHERWISE PROVIDED BY LAW,
            JUST ONE PENNY AND ITS RELATED PARTIES SHALL HAVE NO LIABILITY FOR
            LOSSES CAUSED BY THE NEGLIGENCE, ACTIONS OR FAILURE TO ACT OF ANY
            THIRD PARTY PROVIDER, AND TO THE EXTENT PERMITTED BY LAW, NEITHER
            JUST ONE PENNY, ITS RELATED PARTIES, NOR ANY OF JUST ONE PENNY’
            PROVIDERS SHALL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES OF ANY KIND, OR ANY
            DAMAGES WHATSOEVER (REGARDLESS OF WHETHER SUCH DAMAGES ARE
            REASONABLY FORESEEABLE), AND ON ANY THEORY OF LIABILITY, ARISING OUT
            OF OR IN CONNECTION WITH THE USE OF THIS SITE OR OF ANY THIRD PARTY
            SITE REFERENCED OR LINKED TO FROM THIS SITE. IN NO EVENT SHALL JUST
            ONE PENNY’ TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND
            CAUSES OF ACTION EXCEED THE AMOUNT PAID BY YOU FOR ACCESSING THIS
            SITE. ANY INFORMATION OR DOCUMENTS DOWNLOADED OR OTHERWISE OBTAINED
            THROUGH THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK AND WITH
            YOUR AGREEMENT THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO
            YOUR COMPUTER OF LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY
            SUCH INFORMATION OR DOCUMENTS. IF YOU ARE DISSATISFIED WITH THIS
            SITE, OR ANY PORTION THEREOF, YOUR EXCLUSIVE REMEDY SHALL BE TO
            CEASE USING THE SITE.
            <br />
            <br />
            APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF
            LIABILITY OF DIRECT, INCIDENTAL, CONSEQUENTIAL, INDIRECT, SPECIAL,
            OR PUNITIVE DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT
            APPLY TO YOU.
            <br />
            <br />
            THE ABOVE LIMITATIONS OF LIABILITY DO NOT APPLY TO RESIDENTS OF, OR
            USE OF THE WEBSITE WITHIN, THE STATE OF NEW JERSEY.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>
              14. Your Representations and Warranties.
            </NumberedItem>
            You hereby represent and warrant that you are of the age of majority
            and that all information provided by you during the registration
            process is true, correct and complete.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>
              15. Modification of Our Services and These Terms of Use.
            </NumberedItem>
            We may amend these Terms of Use at any time by updating this
            posting. Any and all relevant portions of these Terms of Use will
            apply automatically to all such modifications, improvements,
            deletions, and/or amendments as they appear on the Site. It is your
            sole responsibility to check the Site from time to time to view any
            such changes in this Agreement. Your continued use of the Site or
            the Services signifies your agreement to our revisions to these
            Terms of Use.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>16. Limitation of Claims.</NumberedItem>
            If any part of this Terms of Use Agreement is held or found to be
            invalid or unenforceable, that portion of the Agreement will be
            construed as to be consistent with applicable law while the
            remaining portions of the Agreement will remain in full force and
            effect. Any failure on our part to enforce any provision of this
            Agreement will not be considered a waiver of our right to enforce
            such provision. Our rights under this Agreement survive any transfer
            or termination of this Agreement.
            <br />
            <br />
            You agree that any cause of action related to or arising out of your
            relationship with Just One Penny must commence within ONE (1) year
            after the cause of action accrues. Otherwise, such cause of action
            is permanently barred. You agree to accept sole responsibility for
            any use of internet facilities conducted or permitted by you or your
            agents, contractors, servants, employees, or other users or
            accesses; the conduct of any business, advertising, marketing or
            sales in connection therewith; and any negligent or illegal act or
            omission of you or your agents, contractors, servants, employees, or
            other users or accesses.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>17. Confidentiality.</NumberedItem>
            You hereby acknowledge and agree that any and all User Information
            may be accessed through the Internet, and hereby acknowledge and
            agree that there can be no assurance that the User Information, or
            any Information provided to you through the Services, or any
            communication through E-mail will remain secure. In addition, Just
            One Penny may disclose, license or otherwise commercially exploit
            User Information to its Related Parties, as well as any governmental
            entity, or other third party (a) for any purpose related to the
            conduct of Just One Penny’ business or to offering, providing or
            maintaining the Information or Services, (b) to comply with
            applicable rules, orders, subpoenas or other legal process, or in
            order to give information to any government agency or official
            requesting such information, or (c) for any other business purpose.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>18. Governing Law and Jurisdiction.</NumberedItem>
            By accessing this Site, you and Just One Penny agree that all
            matters relating to your access to, or use of, this Site shall be
            governed by the federal laws of the United States of American and
            the state laws of the State of Indiana, without regard to conflicts
            of laws principles thereof.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>19. Arbitration.</NumberedItem>
            If any dispute or disagreement between you and Just One Penny shall
            arise in connection with any interpretation of this Agreement, or
            its performance or nonperformance, the parties agree to submit to
            arbitration, in accordance with these provisions. Any such dispute
            or disagreement must be arbitrated on an individual basis, and must
            not be consolidated in any arbitration with any claim or controversy
            of any other party. The parties further agree that the arbitration
            process agreed upon herein shall be the exclusive means for
            resolving all disputes made subject to arbitration herein. Except,
            either party seeking equitable or injunctive relief may apply to a
            federal court in the Southern District of Indiana or in state court
            in Marion County, Indiana. Subject to this Section 12, you agree
            that all claims and disputes between the parties shall be resolved
            by binding arbitration by the American Arbitration Association (AAA)
            under its Commercial Arbitration Rules. The arbitration award shall
            be final and binding regardless of whether one of the parties fails
            or refuses to participate in the arbitration. The arbitrator shall
            not have the power to amend this Agreement in any respect. The
            arbitral award may be entered as judgment and enforceable by any
            court of competent jurisdiction. You and Just One Penny further
            agree that any arbitration held pursuant to this Agreement will be
            held in the City of Indianapolis, Marion County, Indiana, unless
            otherwise agreed to by both parties to this Agreement. All
            arbitration proceedings hereunder shall be confidential. Neither
            party shall disclose any information about the evidence adduced by
            the other in the arbitration proceeding or about documents produced
            by the other in connection with the proceeding, except in the course
            of a judicial, regulatory, or arbitration proceeding, or except as
            may be requested by governmental authority. Before making any
            disclosure as permitted by the preceding sentence, the party shall
            give the other party reasonable notice of the intended disclosure
            and an opportunity to protect its interests. Expert witnesses and
            stenographic reports shall sign appropriate nondisclosure
            agreements. A copy of the Code, Rules, and Fee Schedule of the AAA
            may be obtained by contacting the AAA via mail at: 225 North
            Michigan Avenue, Suite 2527, Chicago, Illinois, 60601-7601. The
            parties agree that all arbitrators selected shall be attorneys. This
            provision shall supersede any contrary rule or provision of the
            forum. This provision constitutes an express waiver of the right to
            court, jury, or administrative review. Just One Penny is engaged in
            commerce using the United States Mail and Telephone service.
            Therefore, this Agreement is subject to the Federal Arbitration Act,
            9 U.S.C. §1-14, as amended from time to time.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>20. Termination.</NumberedItem>
            Just One Penny and its subsidiaries reserve the right to discontinue
            or change the Information or the Services, or their availability to
            you, at any time or for any reason, with or without notice,
            including, without limitation, if Just One Penny believes that
            customer conduct violates applicable law or is harmful to the
            interests of Just One Penny and its subsidiaries. If you breach any
            of the Terms of Use, your authorization to use this Site
            automatically terminates. Upon termination, there shall be no refund
            of any monies paid by you for access to the Site, and you shall
            immediately destroy any Information downloaded or printed from the
            Site.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>21. Assignment.</NumberedItem>
            The Terms of Use shall be binding upon and inure to the benefit of
            the parties and their respective executors, heirs, successors and
            permitted assigns. You may not assign the Terms of Use or your
            rights or obligations hereunder without the prior written permission
            of Just One Penny, and any unauthorized assignment or delegation by
            you is void. Just One Penny may assign the Terms of Use or any of
            its rights or obligations hereunder to any person or entity at any
            time with or without your consent.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>22. Entire Agreement; Severability.</NumberedItem>
            The Terms of Use and guidelines and rules referred to herein
            represent the complete and exclusive statement of the agreement and
            understanding between you and Just One Penny regarding your rights
            to access and use the Services and Information on the Site, and
            supersede all prior and contemporaneous agreements and
            representations regarding such subject matter. To the extent there
            is any direct inconsistency between these Terms of Use for the Site
            and another agreement related to the subject matter hereof entered
            between you and Just One Penny, then the terms in such agreement
            will control. However, for the avoidance of doubt, in the event that
            a subject is addressed in the Terms of Use for the Site and not in
            such agreement, then the terms in the Terms of Use of the Site will
            control. Except as herein provided, no waiver, modification or
            amendment of any provision of the Terms of Use shall be effective
            against Just One Penny unless the same is in writing and signed by
            an authorized official of Just One Penny. Should any term or
            provision in the Terms of Use be deemed or held to be invalid or
            unenforceable, that term or provision will be enforced to the
            maximum extent permissible so as to affect the intent of the
            Agreement, and the remaining terms and provisions shall continue in
            full force and effect.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>23. Waiver.</NumberedItem>
            Just One Penny’ failure to insist at any time upon strict compliance
            with any provision of the Terms of Use, or any delay or failure on
            Just One Penny’ part to exercise any power or right given to Just
            One Penny in the Terms of Use, or a continued course of such conduct
            on Just One Penny’ part shall at no time operate as a waiver of such
            power or right, nor shall any single or partial exercise preclude
            any other future exercise. All rights and remedies given to Just One
            Penny in the Terms of Use are cumulative and not exclusive of any
            other rights or remedies which Just One Penny otherwise has at law
            or equity.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>24. Indemnification.</NumberedItem>
            You shall defend, indemnify and hold Just One Penny and its Related
            Parties and any third party provider harmless from and against any
            and all claims, actions, proceedings, suits, losses, liabilities,
            damages, settlements, penalties, fines, costs and expenses
            (including reasonable attorneys' fees and costs) arising out of, in
            connection with, or resulting from (a) any content you submit, post
            to or transmit through the Site, (b) any breach of or failure to
            carry out, perform, satisfy and discharge any covenant, warranty, or
            representation contained in the Terms of Use, and (c) your use of
            the Site or Services, your connection to the Site or your violation
            of any rights of another person or entity. Just One Penny may, at
            its sole option, engage and manage, at your expense, the defense of
            any such action arising as described herein unless you specify that
            Just One Penny shall conduct the expense.
          </NumberedItemWrapper>

          <NumberedItemWrapper>
            <NumberedItem>25. Acknowledgement.</NumberedItem>
            YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND
            THE TERMS OF USE, AND WILL BE BOUND BY THE TERMS AND CONDITIONS. YOU
            FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE
            PRIVACY STATEMENT REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF
            THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR
            PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS
            BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.
          </NumberedItemWrapper>
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

  &:first-child {
    margin-top: 0.875rem;
  }
`;

const NumberedItem = styled.p`
  font-weight: 900;
`;

const LetteredItemWrapper = styled.div`
  margin-bottom: 0.875rem;
`;

const LetteredItem = styled.p`
  font-weight: 500;

  & span {
    text-decoration: underline;
  }
`;

const LetteredItemText = styled.div`
  margin-left: 1rem;
`;

const Restrictions = styled.ul`
  list-style-type: disc;
  width: 85%;
  margin: 1rem auto;

  & li {
    margin-bottom: 0.5rem;
  }
`;
