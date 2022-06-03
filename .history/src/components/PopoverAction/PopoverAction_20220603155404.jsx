import PropTypes from 'prop-types';
import React from 'react';
import './PopoverAction.scss';

Button.propTypes = {
    handlePopover: PropTypes.func.isRequired,
    isOn: PropTypes.bool.isRequired,
    btnName: PropTypes.string.isRequired,
};

function Button({ handlePopover, isOn, btnName, handleVolume, hidden }) {
    return (
        <div>
            <div className="btn-action" style={hidden ? { display: 'block' } : { display: 'none' }}>
                <div className="btn-circle" onClick={handlePopover}>
                    <div className="btn-circle-button"></div>
                </div>
                <div className="btn-card">
                    <h6 className="btn-card-text">{btnName}</h6>
                    <input
                        defaultValue={20}
                        onChange={(e) => {
                            handleVolume(e.target.value);
                        }}
                        type="range"
                        style={isOn ? { display: 'none' } : { display: 'block' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Button;
