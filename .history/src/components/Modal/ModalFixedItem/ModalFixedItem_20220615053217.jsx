import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children, leftIcon, rightIcon, active, disabled }) {
    return (
        <div className="fixed-item">
            {leftIcon && <span className="icon">{leftIcon}</span>}
            {rightIcon && <span className="icon">{rightIcon}</span>}
            {active && <span className="title-active">{children}</span>}
            {disabled && <span className="title-disabled">{children}</span>}
        </div>
    );
}

export default ModalFixedItem;
