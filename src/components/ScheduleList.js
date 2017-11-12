import React from 'react';

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
          {showImage}
        </a>
      </div>
    );
  });
};

export default scheduleList;
