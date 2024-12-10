import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import StarRating from '../StarRating/StarRating';
import classes from './thumbnails.module.css';

export default function Thumbnails({ foods }) {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {foods.map(food => (
          <li key={food.id} className={classes.listItem}>
            <Link to={`/food/${food.id}`} className={classes.link}>
              <img
                className={classes.image}
                src={`/foods/${food.imageUrl}`}
                alt={food.imageUrl}
              />
              <div className={classes.content}>
                <div className={classes.header}>
                  <div className={classes.name}>{food.name}</div>
                    {/* <span
                      className={`${classes.favorite} ${
                        food.favorite ? '' : classes.not
                      }`}
                    >
                      ❤
                    </span> */}
                </div>
                <div className={classes.stars}>
                  <StarRating stars={food.stars} />
                </div>
                <div className={classes.product_item_footer}>
                  <div className={classes.origins}>
                    {food.origins.map(origin => (
                      <span key={origin}>{origin}</span>
                    ))}
                  </div>
                  <div className={classes.cookTime}>
                    <span>🕒</span>
                    {food.cookTime}
                  </div>
                </div>
                <div className={classes.price}>
                  <Price price={food.price} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
