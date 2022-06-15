import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import * as React from 'react';

import './ModalPremium.scss';
import { ButtonSwitch } from '../../components/Button/ButtonSwitch/ButtonSwitch';

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
                                </div>
                                <div clasaName="modal-get--stretch">
                                    <div clasaName="modal-get--basic"></div>
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
