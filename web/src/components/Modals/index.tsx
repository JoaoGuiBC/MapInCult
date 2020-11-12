import React, { useState, useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';

import ReactModal from 'react-modal';

// import NewEventModal from './NewEventModal';
import SignInModal from './SignInModal';

import { StyledButton } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modals: React.FC<ModalProps> = ({ isOpen, setIsOpen }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      style={{
        overlay: {
          zIndex: 10,
          backgroundColor: 'none',
          width: '350px',
          height: '85vh',

          position: 'absolute',

          top: 'auto',
          left: 'auto',
          right: '25px',
          bottom: '90px',
        },
        content: {
          position: 'absolute',

          top: 'auto',
          left: 'auto',
          right: '0px',
          bottom: '0px',

          width: '350px',
          height: '85vh',

          border: '1px solid #f4e7d6',
          borderRadius: '15px',
          background: '#e7d6bf',
          color: '#312e38',

          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          outline: 'none',
        },
      }}
    >
      <StyledButton type="button" onClick={setIsOpen}>
        <FiXCircle color="#312e38" size={24} />
      </StyledButton>

      <SignInModal />
    </ReactModal>
  );
};

export default Modals;
