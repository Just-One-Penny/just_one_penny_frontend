/**
 *
 * DonationButton
 *
 */
import { DonationModal } from 'app/containers/DonationModal';
import React, { memo } from 'react';
// import styled from 'styled-components/macro';
import { Button } from '../Button';
import { Modal } from '../Modal';

interface Props {
  charityId: string;
  charityName: string;
}

export const DonationButton = memo((props: Props) => {
  return (
    <Modal
      buttonElement={
        <Button btnStyle="primary" className="mt-2">
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
