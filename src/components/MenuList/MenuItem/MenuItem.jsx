import React from 'react';
import './MenuItem.scss';

MenuItem.propTypes = {};

function MenuItem({ text, src }) {
    return (
        <div>
            <div className="menu-item">
                <div className="menu-icon">
                    <img src={src} alt="" />
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default MenuItem;
