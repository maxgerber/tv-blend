import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import Star from './Star';
import styles from '../styles/tvItem.css';

const starRating = (num, id) => {
  const decRating = Math.round(num * 2) / 4;
  const rating = Math.ceil(decRating);
  return Array(rating).fill().map(() => {
    return (
      <Star key={`${id}-star-${rating}`} />
    );
  });
};

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
        <img src={img || 'assets/thumbnail.jpg'} alt={tvData.show.name} />
        <h1>{tvData.show.name}</h1>
        <div styleName="star-rating">
          {starRating(tvData.show.rating.average, tvData.show.id)}
        </div>
      </div>
    </Link>
  );
};

export default CSSModules(TvItem, styles);
