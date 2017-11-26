import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';


const Actor = ({ actor }) => {
  const character =
    (actor.person.name === actor.character.name)
      ? 'Themself'
      : (actor.character.name);
  return (
    <section>
      <img src={actor.person.image.medium} alt={actor.person.name} />
      <h2>{actor.person.name}</h2>
      <h2>{character}</h2>
    </section>
  );
};

export default CSSModules(Actor, styles);
