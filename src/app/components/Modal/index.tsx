/**
 *
 * Modal
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { PortalWithState } from 'react-portal';

interface Props {
  buttonElement: React.ReactNode;
  modalBody: React.ReactNode;
  modalTitle?: string;
  dialog?: boolean;
}

export const Modal = memo((props: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }) => (
        <>
          <div onClick={openPortal}>{props.buttonElement}</div>
          {props.dialog
            ? portal(
                <>
                  <div
                    className="animated justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none"
                    onClick={closePortal}
                  >
                    <div className="relative w-auto my-6 mx-auto">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            {props.modalTitle}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={closePortal}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        {props.modalBody}
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                            onClick={closePortal}
                          >
                            Close
                          </button>
                          <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                            onClick={closePortal}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>,
              )
            : portal(props.modalBody)}
        </>
      )}
    </PortalWithState>
  );
});

const Div = styled.div``;
