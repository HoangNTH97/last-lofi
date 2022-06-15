import React from 'react';

import './ModalFixedItem.scss';

function ModalFixedItem({ children, activeIcon, disabledIcon, title }) {
  return (
    <div className="fixed-item">
      {activeIcon && <span className="active-icon">{activeIcon}</span>}
      {disabledIcon && <span className="disabled-icon">{disabledIcon}</span>}
      {activeIcon && (
        <span className="title-active">
          <span className="title">{title}</span>
          {children}
        </span>
      )}
      {disabledIcon && (
        <span className="title-disabled">
          <span className="title">{title}</span>
          {children}
        </span>
      )}
    </div>
  );
}

export default ModalFixedItem;
