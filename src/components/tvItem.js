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
    <div key={tvData.id} title={tvData.show.name} styleName="max">
      <a href={tvData.url}>
        <h1>{tvData.show.name}</h1>
        <div className="star-rating"><StarRating average={tvData.show.rating.average} /></div>
        {showImage}
      </a>
    </div>
  );
};

export default cssModules(TvItem, styles);
