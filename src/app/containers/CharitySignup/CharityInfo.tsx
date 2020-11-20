import React from 'react';
import styled from 'styled-components';

export const InfoForCharities = () => {
  return (
    <div>
      <Header>Info for Charities</Header>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque mollis sapien, eget semper tortor condimentum imperdiet.
        Maecenas cursus, neque quis venenatis faucibus, eros lacus accumsan
        tellus, et suscipit leo neque vel magna. Curabitur bibendum ut velit
        vitae dignissim. Phasellus in ex at lacus vestibulum fermentum. Morbi
        vitae molestie eros. Sed faucibus metus eu magna molestie, aliquam
        iaculis leo auctor. Curabitur consectetur mi nec metus luctus, eget
        elementum quam consectetur. Mauris facilisis vestibulum pharetra.
        Vivamus sit amet lacus dignissim, finibus mauris et, accumsan ipsum.
        Vivamus accumsan, odio sit amet finibus congue, risus arcu malesuada
        tortor, vel posuere eros purus.
      </Text>
      <SubHeading className="mt-4 mb-1">Subheading</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque mollis sapien, eget semper tortor condimentum imperdiet.
        Maecenas cursus, neque quis venenatis faucibus, eros lacus accumsan
        tellus, et suscipit leo neque vel magna. Curabitur bibendum ut velit
        vitae dignissim. Phasellus in ex at lacus vestibulum fermentum. Morbi
        vitae molestie eros. Sed faucibus metus eu magna molestie, aliquam
        iaculis leo auctor. Curabitur consectetur mi nec metus luctus, eget
        elementum quam consectetur. Mauris facilisis vestibulum pharetra.
        Vivamus sit amet lacus dignissim, finibus mauris et, accumsan ipsum.
      </Text>
    </div>
  );
};

const Header = styled.h2`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-42)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 28px/42px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const SubHeading = styled.h3`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const Text = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;
