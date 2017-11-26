import React from 'react';
import cssModules from 'react-css-modules';
import StarRating from './StarRating';
import styles from '../styles/tvItem.css';

const TvItem = ({ tvData, updateState }) => {
  const img = tvData.show.image.medium;
  return (
    <div
      role="link"
      tabIndex={0}
      title={tvData.show.name}
      styleName="tvItem"
      onClick={() => { return updateState(tvData.show.id); }}
      onKeyUp={() => { return updateState(tvData.show.id); }}
    >
      <div className="star-rating"><StarRating average={tvData.show.rating.average} /></div>
      <img src={img || '../../public/assets/thumbnail.jpg'} alt={tvData.show.name} />
      <h1>{tvData.show.name}</h1>
    </div>
  );
};

export default cssModules(TvItem, styles);
