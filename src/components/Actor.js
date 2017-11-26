import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';


const Actor = ({ actor }) => {
  return (
    <section>
      <img src={actor.person.image.medium} alt={actor.person.name} />
      <h2>{actor.person.name}</h2>
      <h2>{actor.character.name}</h2>
    </section>
  );
};

export default CSSModules(Actor, styles);
