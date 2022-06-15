import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children }) {
    return (
        <div className="fixed-item">
            <i className="fa-solid fa-check"></i>
            <p>{children}</p>
        </div>
    );
}

export default ModalFixedItem;
