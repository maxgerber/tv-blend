import React from 'react';

const formatStarRating = (average) => {
  const starRating = Math.round(average * 2) / 4;
  const arrayOfStars = [];
  for (let i = 0; i < starRating; i + 1) {
    arrayOfStars.push(<span className="star">&#58165;</span>);
  }
  return <div className="star-rating">{arrayOfStars}</div>;
};

export default formatStarRating;
