import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faBars, faExpand } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Media/logo.0cbf9e63b4a021661126.gif';
import HeaderButton2 from '../../components/Button/HeaderButton2/HeaderButton2';
import HeaderButton3 from '../../components/Button/HeaderButton3/HeaderButton3';
import MenuList from '../MenuList/MenuList';
import PremiumModal from '../Modal/ModalPremium';
import './Header.scss';

Header.propTypes = {
  handleVideo: PropTypes.func.isRequired,
};

function Header({ handleVideo }) {
  const [hide, setHide] = useState(true);
  const hideMenu = () => {
    setHide(!hide);
  };

  const fullScreenRef = useRef();

  return (
    <div className="header">
      <div className="header-logo" onClick={() => window.location.reload()}>
        <img src={logo} alt="" />
      </div>
      <div className="header-item">
        <HeaderButton2 handleVideo={handleVideo} />
        <div className="header-premium">
          <PremiumModal>
            <HeaderButton3> Premium 🚀</HeaderButton3>
          </PremiumModal>
        </div>
        <div className="header-signup">
          <HeaderButton3>Sign Up</HeaderButton3>
        </div>
        <div className="header-icon">
          <div className="share-icon">
            <FontAwesomeIcon icon={faShareSquare} />
          </div>
          <div className="expand-icon" ref={fullScreenRef}>
            <FontAwesomeIcon icon={faExpand} />
          </div>
          <div className="Menu">
            <div className="bars-icon" onClick={hideMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>

            <MenuList hide={hide} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
