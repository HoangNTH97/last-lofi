import React from 'react';
import PropTypes from 'prop-types';

PopoverBtn.propTypes = {
    btnName: PropTypes.string.isRequired,
    handlePopover: PropTypes.func.isRequired,
    handleInOut: PropTypes.func.isRequired,
    isOn: PropTypes.bool.isRequired,
};

function PopoverBtn({ handlePopover, btnName, handleInOut, isOn }) {
    const inOut = () => {
        handlePopover();
        handleInOut();
    };
    return (
        <div>
            <div className="btn-action" style={isOn ? { display: 'none' } : { display: 'block' }}>
                <div className="btn-circle" onClick={inOut}>
                    <div className="btn-circle-button"></div>
                </div>
                <div className="btn-card">
                    <h6 className="btn-card-text">{btnName}</h6>
                </div>
            </div>
        </div>
    );
}

export default PopoverBtn;
