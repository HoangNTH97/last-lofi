import React from 'react';

import './ModalFixedItem.scss';

function ModalFixedItem({ children, activeIcon, disabledIcon, active, disabled }) {
    return (
        <div className="fixed-item">
            {activeIcon && <span className="icon">{activeIcon}</span>}
            {disabledIcon && <span className="icon">{disabledIcon}</span>}
            {active && <span className="title-active">{children}</span>}
            {disabled && <span className="title-disabled">{children}</span>}
        </div>
    );
}

export default ModalFixedItem;
