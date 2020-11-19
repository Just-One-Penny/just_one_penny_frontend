/**
 *
 * CharityNewsModal
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal';
import { Modal as UIModal, useModalState } from '@welcome-ui/modal';
import { Link } from 'react-router-dom';

interface Props {
  button: React.ReactNode;
  title: string;
  content?: string;
  date?: string;
}

export const CharityNewsModal = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const modal = useModalState();

  return (
    <>
      <UIModal.Trigger {...modal}>{props.button}</UIModal.Trigger>
      <Container {...modal}>
        <ModalContent>
          <Header>
            <H3>{props.title}</H3>
            <B2>{props.date}</B2>
            <HR />
          </Header>
          <B1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque mollis sapien, eget semper tortor condimentum imperdiet.
            Maecenas cursus, neque quis venenatis faucibus, eros lacus accumsan
            tellus, et suscipit leo neque vel magna. Curabitur bibendum ut velit
            vitae dignissim. Phasellus in ex at lacus vestibulum fermentum.
            Morbi vitae molestie eros. Sed faucibus metus eu magna molestie,
            aliquam iaculis leo auctor. Curabitur consectetur mi nec metus
            luctus, eget elementum quam consectetur. Mauris facilisis vestibulum
            pharetra. Vivamus sit amet lacus dignissim, finibus mauris et,
            accumsan ipsum. Vivamus accumsan, odio sit amet finibus congue,
            risus arcu malesuada tortor, vel posuere eros purus. In et ultricies
            neque, at tempus dui. Quisque posuere, ipsum non tincidunt
            pellentesque, libero felis mattis orci, et tristique velit magna at
            urna. Sed sed ex nunc. Nullam libero tellus, mollis a mi sed,
            condimentum venenatis dui. Aliquam at leo sed velit dictum mollis ut
            non nisl. Etiam sagittis laoreet purus, euismod dapibus felis ornare
            et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Pellentesque sollicitudin leo diam, dictum
            egestas lacus semper ac. Curabitur lacinia malesuada interdum.
            Aliquam augue nunc, vulputate at pharetra vitae, congue a metus. In
            et ultricies neque, at tempus dui. Quisque posuere, ipsum non
            tincidunt pellentesque, libero felis mattis orci, et tristique velit
            magna at urna. Sed sed ex nunc. Nullam libero tellus, mollis a mi
            sed, condimentum venenatis dui. Aliquam at leo sed velit dictum
            mollis ut non nisl. Etiam sagittis laoreet purus, euismod dapibus
            felis ornare et. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Pellentesque sollicitudin
            leo diam, dictum egestas lacus semper ac. Curabitur lacinia
            malesuada interdum. Aliquam augue nunc, vulputate at pharetra vitae,
            congue a metus.
          </B1>
          <DonateContainer>
            <Link to="/charities">
              <Button2>View Charities</Button2>
            </Link>
          </DonateContainer>
        </ModalContent>
      </Container>
    </>
  );
});

const Container = styled(UIModal)`
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;

  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 80%;
`;

const ModalContent = styled(UIModal.Content)`
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1rem;
  align-items: flex-start;
`;

const H3 = styled.h3`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const B2 = styled.p`
  padding-left: 0.1rem;
  padding-bottom: 0.5rem;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const HR = styled.hr`
  border: 1px solid #cbd5e0;
  width: 100%;
  opacity: 0.4;
`;

const B1 = styled.p`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;

  margin-bottom: 140px;
`;

const DonateContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15%;
  width: 100%;
  text-align: center;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -3px 6px #0000001a;
  border-radius: 0px 0px 5px 5px;
  opacity: 1;

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Button2 = styled.button`
  background: transparent
    linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-16) / 22px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 900 16px/22px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  margin: 1rem 3rem 1rem 3 rem;
  width: 75%;
  height: 85%;
  max-width: 250px;
`;
