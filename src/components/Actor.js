import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';


const Actor = ({ actor }) => {
  const character =
    (actor.person.name === actor.character.name)
      ? 'Themself'
      : (actor.character.name);
  return (
    <tr>
      <th>
        <div
          style={{ backgroundImage: `url(${actor.person.image.medium})` }}
          styleName="actor-img"
          alt={actor.person.name}
        />
      </th>
      <th styleName="table__subheader">
        {actor.person.name}
      </th>
      <td styleName="table__body">{character}</td>
    </tr>
  );
};

export default CSSModules(Actor, styles);
