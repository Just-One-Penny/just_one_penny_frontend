/**
 *
 * Modal
 *
 */
import React, { memo } from 'react';
import { Modal as UIModal, useModalState } from '@welcome-ui/modal';
import { Button } from '@welcome-ui/button';

enum Size {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  auto = 'auto',
}

interface Props {
  buttonElement: React.ReactNode;
  modalBody: React.ReactNode;
  modalTitle?: string;
  dialog?: boolean;
  size?: Size;
}

export const Modal = memo((props: Props) => {
  const modal = useModalState();
  return (
    <>
      <UIModal.Trigger {...modal}>{props.buttonElement}</UIModal.Trigger>
      <UIModal {...modal} size={props.size}>
        <UIModal.Content>{props.modalBody}</UIModal.Content>
      </UIModal>
    </>
  );
});
