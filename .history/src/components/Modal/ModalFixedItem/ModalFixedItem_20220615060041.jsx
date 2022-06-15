import React from 'react';

import './ModalFixedItem.scss';

function ModalFixedItem({ children, activeIcon, disabledIcon }) {
    return (
        <div className="fixed-item">
            {activeIcon && <span className="icon">{activeIcon}</span>}
            {disabledIcon && <span className="icon">{disabledIcon}</span>}
            {activeIcon && <span className="title-active">{children}</span>}
            {disabledIcon && <span className="title-disabled">{children}</span>}
        </div>
    );
}

export default ModalFixedItem;
