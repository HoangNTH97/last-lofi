import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/Media/logo.0cbf9e63b4a021661126.gif';
import shareIcon from '../../assets/icon/share.svg';
import fullScreenIcon from '../../assets/icon/fullscreen.svg';
import menuIcon from '../../assets/icon/menu-3.svg';
import HeaderButton2 from '../HeaderButton2/HeaderButton2';
import HeaderButton3 from '../HeaderButton3/HeaderButton3';

import './Header.scss';
import MenuList from '../MenuList/MenuList';
import TransitionsModal from '../Modal/ModalPremium';
import PremiumModal from '../Modal/ModalPremium';

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
                    <img src={shareIcon} alt="" />
                    <img src={fullScreenIcon} alt="" />
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
