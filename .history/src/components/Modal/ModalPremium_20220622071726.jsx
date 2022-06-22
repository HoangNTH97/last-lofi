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
          <div className="modal-premium">
            <div className="modal-container">
              <div onClick={handleClose} className="modal-close-icon">
                <FontAwesomeIcon icon={faXmark} />
              </div>

              <div className="modal-get">
                <h2 className="modal-get--header">Get more done with premium</h2>
                <div className="modal-get--pay">
                  <h4 style={option ? { opacity: '0.2' } : { opacity: '1' }}>Pay monthly</h4>
                  <div onClick={() => setOption(!option)} className="btn-switch">
                    <ButtonSwitch />
                  </div>
                  <h4 style={!option ? { opacity: '0.2' } : { opacity: '1' }}>Pay yearly</h4>
                  <div className="btn-discount">
                    {option && <Button className={'out-line discount'}>Save 25%</Button>}
                  </div>
                </div>
              </div>
              <div className="modal-join">
                <div className="modal-join--header">
                  Join the <span>lofi.co</span> family
                </div>

                <div className="modal-join--member">
                  <h2 className="modal-join--accent">+150.000</h2>
                  <p className="modal-join--title">Users chilling every month</p>
                </div>

                <h3>Don't believe in numbers?</h3>
                <h6>Read what users write on socials about us.</h6>

                <div className="mosaic"></div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
