import React from 'react';
import StarRating from './StarRating';

const scheduleList = ({ schedule }) => {
  return schedule.map((tvItem) => {
    let showImage;
    if (tvItem.show.image) {
      showImage = <img src={tvItem.show.image.medium} alt={tvItem.show.name} />;
    }
    return (
      <div key={tvItem.id} title={tvItem.show.name} className="tvItem">
        <a href={tvItem.url}>
          <h1>{tvItem.show.name}</h1>
          <div className="star-rating"><StarRating average={tvItem.show.rating.average} /></div>
          {showImage}
        </a>
      </div>
    );
  });
};

export default scheduleList;
