import { faCheck, faXmark, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

import Button from '../../components/Button/Button';
import { ButtonSwitch } from '../../components/Button/ButtonSwitch/ButtonSwitch';
import ModalMosaic1 from './Modal-mosaic/ModalMosaic1';
import ModalFixedItem from './ModalFixedItem/ModalFixedItem';
import './ModalPremium.scss';

export default function PremiumModal({ children }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(false);
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
          <div className="modal-premium"></div>
        </Fade>
      </Modal>
    </div>
  );
}
