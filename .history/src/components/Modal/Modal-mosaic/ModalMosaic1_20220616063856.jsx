import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

ModalMosaic1.propTypes = {};

function ModalMosaic1(props) {
  return (
    <div>
      <div className="mosaic-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default ModalMosaic1;
