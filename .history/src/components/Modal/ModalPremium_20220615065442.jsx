import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './ModalPremium.scss';
import { ButtonSwitch } from '../../components/Button/ButtonSwitch/ButtonSwitch';
import ModalFixedItem from './ModalFixedItem/ModalFixedItem';

export default function PremiumModal({ children }) {
    const [open, setOpen] = React.useState(false);
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
                            <div className="modal-get">
                                <h2 className="modal-get--header">Get more done with premium</h2>
                                <div className="modal-get--pay">
                                    <h4>Pay monthly</h4>
                                    <ButtonSwitch />
                                    <h4>Pay yearly</h4>
                                </div>
                                <div className="modal-get--stretch">
                                    <div className="modal-get--basic">
                                        <h2 className="type">Basic</h2>
                                        <span>$0</span>

                                        <div className="modal-fixed">
                                            <ModalFixedItem
                                                activeIcon={<FontAwesomeIcon icon={faCheck} />}
                                            >
                                                Ad-free
                                            </ModalFixedItem>
                                            <ModalFixedItem
                                                activeIcon={<FontAwesomeIcon icon={faCheck} />}
                                            >
                                                Unlimited Music Streaming
                                            </ModalFixedItem>
                                            <ModalFixedItem
                                                activeIcon={<FontAwesomeIcon icon={faCheck} />}
                                            >
                                                2 Scenes
                                            </ModalFixedItem>
                                            <ModalFixedItem
                                                activeIcon={<FontAwesomeIcon icon={faCheck} />}
                                            >
                                                3 Sounds
                                            </ModalFixedItem>
                                        </div>
                                    </div>
                                    <div className="modal-get--premium"></div>
                                </div>
                                ?
                            </div>
                            <div className="modal-join"></div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
