import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/tvItem.css';

const Star = () => {
  return (
    <span styleName="star">&#x2605;</span>
  );
};

export default CSSModules(Star, styles);
