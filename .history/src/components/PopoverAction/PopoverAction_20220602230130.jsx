import PropTypes from 'prop-types';
import React from 'react';
import './PopoverAction.scss';

Button.propTypes = {
    handlePopover: PropTypes.func.isRequired,
    isOn: PropTypes.bool.isRequired,
    btnName: PropTypes.string.isRequired,
};

function Button({ handlePopover, isOn, btnName }) {
    return (
        <div>
            <div className="btn-action">
                <div className="btn-circle" onClick={handlePopover}>
                    <div className="btn-circle-button"></div>
                </div>
                <div className="btn-card">
                    <h6 className="btn-card-text">{btnName}</h6>
                    <input onChange={} type="range" style={isOn ? { display: 'none' } : { display: 'block' }} />
                </div>
            </div>
        </div>
    );
}

export default Button;
