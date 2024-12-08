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
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [customizations, setCustomizations] = useState({});

  const handleAddToCart = () => {
    // Add customization options to the food item if any
    const foodWithCustomization = { ...food, customizations };
    addToCart(foodWithCustomization);
    navigate('/cart');
  };

  const handleCustomizationChange = (e, field, value) => {
    setCustomizations(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  // Function to render customization options dynamically
  const renderCustomizationOptions = (field, options) => {
    if (options && options.length > 0) {
      return options.map(option => (
        <div key={option} className={classes.customizationOption}>
          <label>
            <input
              type="checkbox"
              name={field}
              value={option}
              onChange={e => handleCustomizationChange(e, field, option)}
            />
            {option}
          </label>
        </div>
      ));
    }
    return null;
  };

  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />
          
          <div className={classes.details}>
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

            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map(tag => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            <div className={classes.cook_time}>
              <span>
                Preparation Time: about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>
              <Price price={food.price} />
            </div>

            {/* Nutritional Information Section */}
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

            {/* Dietary Notes Section */}
            {food.dietaryNotes && (
              <div className={classes.dietary_notes}>
                <h3>Dietary Notes:</h3>
                <p>{food.dietaryNotes}</p>
              </div>
            )}

            {/* Allergens Section */}
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
            {food.customization && Object.keys(food.customization).length > 0 && (
              <div className={classes.customizations}>
                <h3>Customization Options:</h3>
                {Object.keys(food.customization).map(field => {
                  return renderCustomizationOptions(
                    field,
                    food.customization[field]
                  );
                })}
              </div>
            )}

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
