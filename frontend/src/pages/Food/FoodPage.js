import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Price from '../../components/Price/Price';
import StarRating from '../../components/StarRating/StarRating';
import Tags from '../../components/Tags/Tags';
import { useCart } from '../../hooks/useCart';
import { getById } from '../../services/foodService';
import classes from './foodPage.module.css';
import NotFound from '../../components/NotFound/NotFound';

export default function FoodPage() {
  const [food, setFood] = useState({});
  const [customization, setCustomization] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Handle adding food with customization to cart
  const handleAddToCart = () => {
    const foodWithCustomization = { ...food, customization };
    addToCart(foodWithCustomization);
    navigate('/cart');
  };

  // Handle changes in customization options
  const handleCustomizationChange = (key, value) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  // Fetch food item and initialize customization
  useEffect(() => {
    getById(id).then(data => {
      setFood(data);

      // Initialize customization state specific to the meal
      if (data.customization) {
        const defaultCustomization = {};
        Object.keys(data.customization).forEach(key => {
          defaultCustomization[key] = false; // Default to unchecked
        });
        setCustomization(defaultCustomization);
      }
    });
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          {/* Food Image */}
          <img
            className={classes.image}
            src={`${food.imageUrl}`}
            alt={food.name}
          />

          <div className={classes.details}>
            {/* Food Header */}
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not
                }`}
              >
                ❤
              </span>
            </div>

            {/* Star Rating */}
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            {/* Origins */}
            <div className={classes.origins}>
              {food.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
            </div>

            {/* Tags */}
            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map(tag => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            {/* Cook Time */}
            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            {/* Price */}
            <div className={classes.price}>
              <Price price={food.price} />
            </div>

            {/* Nutritional Information */}
            {food.nutrition && (
              <div className={classes.nutrition}>
                <h3>Nutritional Information:</h3>
                <ul>
                  <li>Calories: {food.nutrition.calories} kcal</li>
                  <li>Protein: {food.nutrition.protein}</li>
                  <li>Carbs: {food.nutrition.carbs}</li>
                  <li>Fat: {food.nutrition.fat}</li>
                </ul>
              </div>
            )}

            {/* Dietary Notes */}
            {food.dietaryNotes && (
              <div className={classes.dietary_notes}>
                <h3>Dietary Notes:</h3>
                <p>{food.dietaryNotes}</p>
              </div>
            )}

            {/* Allergens */}
            {food.allergens && food.allergens.length > 0 && (
              <div className={classes.allergens}>
                <h3>Allergens:</h3>
                <ul>
                  {food.allergens.map(allergen => (
                    <li key={allergen}>{allergen}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Customization Section */}
            {food.customization && (
              <div className={classes.customization}>
                <h3>Customization Options:</h3>
                {Object.keys(food.customization).map(key => (
                  <div key={key} className={classes.customizationOption}>
                    <label htmlFor={key}>
                      <input
                        type="checkbox"
                        id={key}
                        checked={customization[key]}
                        onChange={e => handleCustomizationChange(key, e.target.checked)}
                      />
                      {key.replace(/([A-Z])/g, ' $1')} {/* Formats camelCase to readable text */}
                    </label>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
