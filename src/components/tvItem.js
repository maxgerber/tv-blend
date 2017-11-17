import React from 'react';
import cssModules from 'react-css-modules';
import StarRating from './StarRating';
import styles from '../styles/tvItem.css';

const TvItem = ({ tvData }) => {
  let showImage;
  if (tvData.show.image) {
    showImage = <img src={tvData.show.image.medium} alt={tvData.show.name} />;
  }
  return (
    <div title={tvData.show.name} styleName="tvItem">
      <a href={tvData.url}>
        <div className="star-rating"><StarRating average={tvData.show.rating.average} /></div>
        {showImage}
        <h1>{tvData.show.name}</h1>
      </a>
    </div>
  );
};

export default cssModules(TvItem, styles);
