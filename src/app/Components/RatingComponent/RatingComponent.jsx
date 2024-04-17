import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingComponent = ({ rating }) => {
    if (typeof rating !== 'number') {
        return null; // or handle the invalid input
      }
    const maxRating = 5;
    const numStars = Math.floor(rating); // Whole number of stars
    const remainder = rating - numStars; // Fractional part
  
    return (
        <div>
            <div>
      {/* Render whole stars */}
      <StarRatings
        rating={numStars}
        starRatedColor="gold"
        numberOfStars={numStars}
        starDimension="20px"
        starSpacing="1px"
      />
      {/* Render half star if remainder >= 0.5 */}
      {remainder >= 0.5 && (
        <StarRatings
          rating={0.5}
          starRatedColor="gold"
          numberOfStars={1}
          starDimension="20px"
          starSpacing="1px"
          starEmptyColor="transparent"
        />
      )}
    </div> 
        </div>
    );
};

export default RatingComponent;