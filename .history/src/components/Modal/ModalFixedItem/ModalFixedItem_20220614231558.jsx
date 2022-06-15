import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children }) {
    return (
        <div className="fixed-item">
            <FontAwesomeIcon icon="fa-solid fa-check" />
            <p>{children}</p>
        </div>
    );
}

export default ModalFixedItem;
