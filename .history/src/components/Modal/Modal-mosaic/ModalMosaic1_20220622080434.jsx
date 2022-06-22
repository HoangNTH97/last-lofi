import React from 'react';
import PropTypes from 'prop-types';

import './ModalMosaic1.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

ModalMosaic1.propTypes = {};

function ModalMosaic1({
  icon = <FontAwesomeIcon icon={faInstagram} />,
  image = 'https://source.unsplash.com/random',
}) {
  return (
    <div className="mosaic-item">
      <div className="mosaic-infomation">
        <div className="mosaic-icon">{icon}</div>
        <div className="mosaic-user"></div>
      </div>

      <div className="mosaic-content">
        <img className="mosaic-image" src={image} alt="" />
      </div>
    </div>
  );
}

export default ModalMosaic1;
