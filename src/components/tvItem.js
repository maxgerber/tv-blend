import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import styles from '../styles/tvItem.css';

const TvItem = ({ tvData, updateState }) => {
  const img = tvData.show.image.medium;
  return (
    <Link to="/show" href="/show">
      <div
        role="link"
        tabIndex={0}
        title={tvData.show.name}
        styleName="tvItem"
        onClick={() => { return updateState(tvData.show.id); }}
        onKeyUp={() => { return updateState(tvData.show.id); }}
      >
        <div className="star-rating"><StarRating average={tvData.show.rating.average} /></div>
        <img src={img || './assets/thumbnail.jpg'} alt={tvData.show.name} />
        <h1>{tvData.show.name}</h1>
      </div>
    </Link>
  );
};

export default cssModules(TvItem, styles);
