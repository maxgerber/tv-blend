import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/App.css';

const Home = ({ contents }) => {
  return (
    <section styleName="schedule">
      {contents()}
    </section>
  );
};

export default CSSModules(Home, styles);
