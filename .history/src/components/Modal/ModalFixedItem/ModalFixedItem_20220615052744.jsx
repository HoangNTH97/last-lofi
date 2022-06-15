import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children, leftIcon, rightIcon, active, disabled }) {
    return (
        <div className={'fixed-item'}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </div>
    );
}

export default ModalFixedItem;
