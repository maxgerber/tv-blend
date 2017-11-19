import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';

const Show = () => {
  return (
    <section styleName="show">
      Hello
    </section>
  );
};

export default CSSModules(Show, styles);
