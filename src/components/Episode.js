import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Show.css';


const Episode = ({ episode }) => {
  return (
    <tr>
      <th>{`${episode.season}x${episode.number}`}</th>
      <td>{episode.name}
      </td>
      <td>{episode.airdate}</td>
    </tr>
  );
};

export default CSSModules(Episode, styles);
