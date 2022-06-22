import React from 'react';
import PropTypes from 'prop-types';
import './HeaderButton3.scss';

HeaderButton3.propTypes = {
    text: PropTypes.string.isRequired,
};

function HeaderButton3({ text }) {
    return (
        <div>
            <button className="btn">{text}</button>
        </div>
    );
}

export default HeaderButton3;
