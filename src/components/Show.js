import React from 'react';
import CSSModules from 'react-css-modules';

import removeHTML from '../helpers/removeHTML';
import arrayToList from '../helpers/arrayToList';
import Actor from './Actor';
import Episode from './Episode';
import styles from '../styles/Show.css';

const starringList = (cast) => {
  return cast.map((actor) => {
    return <Actor key={actor.name} actor={actor} />;
  });
};
const episodeList = (episodes) => {
  return episodes.map((episode) => {
    return <Episode key={episode.name} episode={episode} />;
  });
};

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
          <tbody>
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
          </tbody>
        </table>
        <section>
          {starringList(cast)}
        </section>
        <table>
          <tbody>
            {episodeList(episodes)}
          </tbody>
        </table>
      </section>);
};

export default CSSModules(Show, styles);
