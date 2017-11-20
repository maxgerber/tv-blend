import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';

const Show = () => {
  // console.log(props);
  return (
    <section styleName="show">
      {/* Hey, {'' || props.contents.name} */}
    </section>
  );
};

export default CSSModules(Show, styles);
