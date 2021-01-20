/**
 *
 * DonationButton
 *
 */
import { DonationModal } from 'app/containers/DonationModal';
import React, { memo } from 'react';
// import styled from 'styled-components/macro';
import { Button } from '../Button';
import { Modal, Size } from '../Modal';

interface Props {
  charityId: string;
  charityName: string;
  buttonStyle: 'primary' | 'secondary' | 'donation';
}

export const DonationButton = memo((props: Props) => {
  return (
    <Modal
      size={Size.sm}
      buttonElement={
        <Button btnStyle={props.buttonStyle} className="mt-2">
          Donate to This Charity
        </Button>
      }
      modalBody={
        <DonationModal
          charityId={props.charityId}
          charityName={props.charityName}
        />
      }
    />
  );
});
