/**
 *
 * Modal
 *
 */
import React, { memo } from 'react';
import { Modal as UIModal, useModalState } from '@welcome-ui/modal';
import styled from 'styled-components';

enum Size {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  auto = 'auto',
}

interface Props {
  buttonElement: React.ReactNode;
  modalBody: React.ReactElement;
  modalTitle?: string;
  dialog?: boolean;
  size?: Size;
}

export const Modal = memo((props: Props) => {
  const modal = useModalState();

  return (
    <>
      <UIModal.Trigger {...modal}>{props.buttonElement}</UIModal.Trigger>
      <ModalContainer {...modal} size={props.size}>
        <ModalContent className="p-0">
          {props.modalBody ? React.cloneElement(props.modalBody, modal) : null}
        </ModalContent>
      </ModalContainer>
    </>
  );
});

const ModalContainer = styled(UIModal)`
  border-width: 0;
`;

const ModalContent = styled(UIModal.Content)`
  padding: 0;
`;
