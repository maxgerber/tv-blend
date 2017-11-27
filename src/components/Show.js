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
        <table styleName="showInfo">
          <thead>
            <tr styleName="bb-none"><th styleName="showInfo__header">Show Info</th></tr>
          </thead>
          <tbody>
            <tr>
              <th styleName="showInfo__subheader">Streamed on</th>
              <td styleName="showInfo__body">{show.network.name}</td>
            </tr>
            <tr>
              <th styleName="showInfo__subheader">Schedule</th>
              <td styleName="showInfo__body">{arrayToList(show.schedule.days)}</td>
            </tr>
            <tr>
              <th styleName="showInfo__subheader">Status</th>
              <td styleName="showInfo__body">{show.status}</td>
            </tr>
            <tr>
              <th styleName="showInfo__subheader">Genres</th>
              <td styleName="showInfo__body">{arrayToList(show.genres)}
              </td>
            </tr>
          </tbody>
        </table>
        <section styleName="dn">
          {starringList(cast)}
        </section>
        <table styleName="dn">
          <tbody>
            {episodeList(episodes)}
          </tbody>
        </table>
      </section>);
};

export default CSSModules(Show, styles);
