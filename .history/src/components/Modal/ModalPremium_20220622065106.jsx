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

              {/* <div className="modal-get">
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
                <div className="modal-get--stretch">
                  <div className="modal-get--basic">
                    <h2 className="type">Basic</h2>
                    <div className="money">
                      <h3>$0</h3>
                    </div>

                    <Button className={'primary out-line btn-basic'}>Use Basic</Button>

                    <div className="modal-fixed">
                      <ModalFixedItem
                        title={`123 `}
                        activeIcon={<FontAwesomeIcon icon={faCheck} />}
                      >
                        Ad-free
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Unlimited Music Streaming
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        2 Scenes
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        3 Sounds
                      </ModalFixedItem>

                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Download Wallpapers
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Save your favorite templates
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Customizable Pomodoro Timer
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Notepad
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Time-logger
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        To-do list
                      </ModalFixedItem>
                      <ModalFixedItem disabledIcon={<FontAwesomeIcon icon={faXmark} />}>
                        Support mentor helth organizations*
                      </ModalFixedItem>
                    </div>
                  </div>

                  <div className="modal-get--premium">
                    <h2 className="type">Premium</h2>
                    <div className="money">
                      <h3>{option ? '$2,99' : '$3,99'}</h3>
                      <p> /mo</p>
                    </div>
                    <Button href={'/premium'} className={'primary out-line btn-premium'}>
                      Try Premium *
                    </Button>
                    <div className="modal-fixed">
                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Ad-free
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Unlimited Music Streaming
                      </ModalFixedItem>

                      <ModalFixedItem title={`20 `} activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Scenes and growing
                      </ModalFixedItem>

                      <ModalFixedItem
                        title={`15+ `}
                        activeIcon={<FontAwesomeIcon icon={faCheck} />}
                      >
                        sounds to mix and match to your liking
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Download Wallpapers
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Save your favorite templates
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Pomodoro & Timer
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Notepad
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Time-logger
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        To-do list
                      </ModalFixedItem>

                      <ModalFixedItem activeIcon={<FontAwesomeIcon icon={faCheck} />}>
                        Support mentor helth organizations*
                      </ModalFixedItem>
                    </div>
                  </div>
                </div>

                <div className="modal-get-footer">
                  <div className="footer-button">
                    <Button
                      className={'footer-button--item out-line primary'}
                      leftIcon={<FontAwesomeIcon icon={faInfinity} />}
                    >
                      <span>Lifetime access</span>
                    </Button>
                  </div>
                  <div className="footer-title">
                    <p>*1% of every sale supports mental</p>
                    <p>health organizations worldwide</p>
                  </div>
                </div>
              </div> */}
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

                <div className="mosaic">
                  <ModalMosaic1 />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
