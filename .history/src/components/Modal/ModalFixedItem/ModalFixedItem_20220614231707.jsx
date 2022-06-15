import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children }) {
    return (
        <div className="fixed-item">
            <FontAwesomeIcon icon={faCheck} />
            <p>{children}</p>
        </div>
    );
}

export default ModalFixedItem;
