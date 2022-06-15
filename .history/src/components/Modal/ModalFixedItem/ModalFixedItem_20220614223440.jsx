import React from 'react';
import PropTypes from 'prop-types';

// import checkIcon from 'https://lofi.co/static/media/check-simple.829e5bed16eb5775ab286f6a904e2bba.svg';

import './ModalFixedItem.module.scss';

ModalFixedItem.propTypes = {};

function ModalFixedItem(props) {
    return (
        <div className="fixed-item">
            <img src={checkIcon} alt="" />
        </div>
    );
}

export default ModalFixedItem;
