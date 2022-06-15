import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ModalFixedItem.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children }) {
    return (
        <div className="fixed-item">
            <FontAwesomeIcon icon={faCheck} /> <span>{children}</span>
        </div>
    );
}

export default ModalFixedItem;
