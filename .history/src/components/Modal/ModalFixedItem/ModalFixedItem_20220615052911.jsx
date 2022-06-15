import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children, leftIcon, rightIcon }) {
    return (
        <div className="fixed-item">
            {leftIcon && <span className="icon">{leftIcon}</span>}
            {rightIcon && <span className="icon">{rightIcon}</span>}
            <span className="title">{children}</span>
        </div>
    );
}

export default ModalFixedItem;
