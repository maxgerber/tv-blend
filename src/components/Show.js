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
        <section styleName="show__header">
          <img src={show.image.medium} alt={show.name} />
          <header>
            <h1>{'' || show.name}</h1>
            <p>{removeHTML(show.summary)}</p>
          </header>
        </section>
        <section styleName="tables">
          <table>
            <thead>
              <tr styleName="bb-none">
                <th styleName="table__header showInfo__header">Show Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th styleName="table__subheader">Streamed on</th>
                <td styleName="table__body">{show.network.name}</td>
              </tr>
              <tr>
                <th styleName="table__subheader">Schedule</th>
                <td styleName="table__body">{arrayToList(show.schedule.days)}</td>
              </tr>
              <tr>
                <th styleName="table__subheader">Status</th>
                <td styleName="table__body">{show.status}</td>
              </tr>
              <tr>
                <th styleName="table__subheader">Genres</th>
                <td styleName="table__body">{arrayToList(show.genres)}
                </td>
              </tr>
            </tbody>
          </table>
          <table styleName="starringInfo">
            <thead>
              <tr styleName="bb-none"><th styleName="table__header">Starring</th></tr>
            </thead>
            <tbody>
              {starringList(cast)}
            </tbody>
          </table>
          <table styleName="dn">
            <tbody>
              {episodeList(episodes)}
            </tbody>
          </table>
        </section>
      </section>);
};

export default CSSModules(Show, styles, { allowMultiple: true });
