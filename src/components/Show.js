import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';

const Show = ({ contents }) => {
  return (
    !contents ?
      <section styleName="show">Loading...</section>
      :
      <section styleName="show">
      Hey, {'' || contents.name}
      </section>
  );
};

export default CSSModules(Show, styles);
