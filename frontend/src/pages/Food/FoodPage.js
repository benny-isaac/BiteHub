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
  const [customizedPrice, setCustomizedPrice] = useState(0);

  useEffect(() => {
    // Fetch food data and initialize customization state
    getById(id)
      .then(data => {
        setFood(data);
        setCustomizedPrice(data.price || 0);

        // Check if customizations exist in localStorage
        const savedCustomizations = JSON.parse(localStorage.getItem(`food_${id}_customizations`)) || {};
        const savedPrice = JSON.parse(localStorage.getItem(`food_${id}_price`)) || data.price || 0;

        setCustomizations(savedCustomizations);
        setCustomizedPrice(savedPrice);
      })
      .catch(error => {
        console.error('Error fetching food data:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    const foodWithCustomization = { ...food, customizations, price: customizedPrice };
    addToCart(foodWithCustomization);

    // Save customizations and price in localStorage
    localStorage.setItem(`food_${id}_customizations`, JSON.stringify(customizations));
    localStorage.setItem(`food_${id}_price`, JSON.stringify(customizedPrice));

    navigate('/cart');
  };

  const handleCustomizationChange = (e, field, option, price) => {
    const isChecked = e.target.checked;

    setCustomizations(prevState => {
      const updatedCustomizations = {
        ...prevState,
        [field]: isChecked
          ? [...(prevState[field] || []), option]
          : prevState[field]?.filter(item => item !== option),
      };

      // Save updated customizations to localStorage
      localStorage.setItem(`food_${id}_customizations`, JSON.stringify(updatedCustomizations));
      return updatedCustomizations;
    });

    const priceChange = isChecked ? price : -price;
    setCustomizedPrice(prevPrice => {
      const updatedPrice = prevPrice + priceChange;

      // Save updated price to localStorage
      localStorage.setItem(`food_${id}_price`, JSON.stringify(updatedPrice));
      return updatedPrice;
    });
  };

  const renderCustomizationOptions = (field, options) => {
    if (options && options.length > 0) {
      return options.map(({ option, price }) => (
        <div key={option} className={classes.customizationOption}>
          <label>
            <input
              type="checkbox"
              name={field}
              value={option}
              onChange={e => handleCustomizationChange(e, field, option, price)}
              checked={customizations[field]?.includes(option) || false} // Restore checkbox state
            />
            {option} (${price.toFixed(2)})
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
              <Price price={customizedPrice} />
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
            {food.customization && Object.keys(food.customization).length > 0 && (
              <div className={classes.customizations}>
                <h3>Customization Options:</h3>
                {Object.keys(food.customization).map(field =>
                  renderCustomizationOptions(field, food.customization[field])
                )}
              </div>
            )}

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
