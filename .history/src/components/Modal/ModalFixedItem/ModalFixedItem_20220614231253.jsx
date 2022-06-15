import React from 'react';
import PropTypes from 'prop-types';

import './ModalFixedItem.scss';
import { CheckIcon } from '../../icons/icons';

ModalFixedItem.propTypes = {};

function ModalFixedItem({ children }) {
    return (
        <div className="fixed-item">
            <p>{children}</p>
        </div>
    );
}

export default ModalFixedItem;
