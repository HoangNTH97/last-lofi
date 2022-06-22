import React from 'react';
import PropTypes from 'prop-types';
import './HeaderButton3.scss';

HeaderButton3.propTypes = {};

function HeaderButton3({ children }) {
  return (
    <div>
      <button className="btn">{children}</button>
    </div>
  );
}

export default HeaderButton3;
