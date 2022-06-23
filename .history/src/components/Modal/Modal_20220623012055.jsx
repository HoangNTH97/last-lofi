import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function Modal({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{children}</Fade>
      </Modal>
    </div>
  );
}

export default Modal;
