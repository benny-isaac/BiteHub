import React from 'react';
import classes from './Rating.module.css';

export default function StarRating({ value, onChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={classes.starContainer}>
      {stars.map(star => (
        <span
          key={star}
          className={`${classes.star} ${star <= value ? classes.filled : ''}`}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
