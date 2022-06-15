import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ModalFixedItem.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children, leftIcon, rightIcon }) {
    return (
        <div className="fixed-item">
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </div>
    );
}

export default ModalFixedItem;
