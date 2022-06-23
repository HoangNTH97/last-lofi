import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fade, Modal } from '@mui/material';

import logo from '../../../assets/Media/logo.0cbf9e63b4a021661126.gif';
import './ModalSignUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

ModalSignUp.propTypes = {};

function ModalSignUp({ children }) {
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
        <Fade in={open}>
          <div className="modal-signup">
            <div className="modal-signup--close" onClick={handleClose}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="modal-signup--logo">
              <img src={logo} alt="" />
            </div>

            <div className="modal-signup--content">
              <div className="modal-signup--header">
                <h1>Nice to meet you!</h1>
                <h4>Sign up for free account</h4>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalSignUp;
