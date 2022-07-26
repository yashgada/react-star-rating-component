import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({size}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
              value={ratingValue}
              />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
              size={size}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
