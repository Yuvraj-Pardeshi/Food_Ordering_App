import React, { useState } from 'react';
import RestCard from './RestCard.js';
import resobj from '../utils/data.js';

const MainContent = () => {
  const [restaurants, setRestaurants] = useState(resobj.restaurants);

  const handleFilterTopRated = () => {
    const filteredRestaurants = resobj.restaurants.filter(
      (item) => item.info.avgRating > 4
    );
    setRestaurants(filteredRestaurants);
  };

  return (
    <div className="main-content">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant, index) => (
          <RestCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
