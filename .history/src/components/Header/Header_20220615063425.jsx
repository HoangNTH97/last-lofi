import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import menuIcon from '../../assets/icon/menu-3.svg';
import logo from '../../assets/Media/logo.0cbf9e63b4a021661126.gif';
import HeaderButton2 from '../../components/Button/HeaderButton2/HeaderButton2';
import HeaderButton3 from '../../components/Button/HeaderButton3/HeaderButton3';
import MenuList from '../MenuList/MenuList';
import PremiumModal from '../Modal/ModalPremium';
import './Header.scss';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

Header.propTypes = {
    handleVideo: PropTypes.func.isRequired,
};

function Header({ handleVideo }) {
    const [hide, setHide] = useState(true);
    const hideMenu = () => {
        setHide(!hide);
    };

    return (
        <div>
            <div className="header">
                <div className="header-logo" onClick={() => window.location.reload()}>
                    <img src={logo} alt="" />
                </div>
                <div className="header-item">
                    <HeaderButton2 handleVideo={handleVideo} />
                    <div className="header-premium">
                        <PremiumModal>
                            <HeaderButton3 text=" Premium 🚀" />
                        </PremiumModal>
                    </div>
                    <div className="header-signup">
                        <HeaderButton3 text="Sign Up" />
                    </div>
                    <FontAwesomeIcon icon={faShareSquare} />
                    <FontAwesomeIcon icon={faExpand} />
                    <div className="Menu">
                        <img onClick={hideMenu} src={menuIcon} alt="" />
                        <MenuList hide={hide} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
