import React from 'react';
import CSSModules from 'react-css-modules';

import removeHTML from '../helpers/removeHTML';
import arrayToList from '../helpers/arrayToList';

import styles from '../styles/Show.css';

const Show = ({ show, episodes, cast }) => {
  return (
    !episodes
      ? <section styleName="show">Loading...</section>
      :
      <section styleName="show">
        <img src={show.image.medium} alt={show.name} />
        <h1>{'' || show.name}</h1>
        <p>{removeHTML(show.summary)}</p>
        <table>
          <tr>
            <th>Streamed on</th>
            <td>{show.network.name}</td>
          </tr>
          <tr>
            <th>Schedule</th>
            <td>{arrayToList(show.schedule.days)}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{show.status}</td>
          </tr>
          <tr>
            <th>Genres</th>
            <td>{arrayToList(show.genres)}
            </td>
          </tr>
        </table>
        <p>{cast[0].person.name}</p>
        <p>{episodes[0].name}</p>
      </section>);
};

export default CSSModules(Show, styles);
