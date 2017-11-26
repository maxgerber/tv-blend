import React from 'react';
import CSSModules from 'react-css-modules';

import removeHTML from '../helpers/removeHTML';
import arrayToList from '../helpers/arrayToList';

import styles from '../styles/Show.css';

const Show = ({ contents }) => {
  return (
    !contents
      ? <section styleName="show">Loading...</section>
      :
      <section styleName="show">
        <img src={contents.image.medium} alt={contents.name} />
        <h1>{'' || contents.name}</h1>
        <p>{removeHTML(contents.summary)}</p>
        <table>
          <tr>
            <th>Streamed on</th>
            <td>{contents.network.name}</td>
          </tr>
          <tr>
            <th>Schedule</th>
            <td>{arrayToList(contents.schedule.days)}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{contents.status}</td>
          </tr>
          <tr>
            <th>Genres</th>
            <td>{arrayToList(contents.genres)}
            </td>
          </tr>
        </table>

      </section>);
};

export default CSSModules(Show, styles);
