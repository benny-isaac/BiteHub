import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Title from '../../components/Title/Title';
import { useCart } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import NotFound from '../../components/NotFound/NotFound';

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <>
      <Title title="Your Cart" margin="1.5rem 0 1rem 2.5rem" />

      {cart.items.length === 0 ? (
        <NotFound message="Your cart is empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.food.id} className={classes.item}>
                <div className={classes.itemImage}>
                  <img src={`/foods/${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div className={classes.itemDetails}>
                  <Link to={`/food/${item.food.id}`} className={classes.itemName}>
                    {item.food.name}
                  </Link>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                    className={classes.itemQuantity}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classes.itemPrice}>
                  <Price price={item.price} />
                </div>
                <div className={classes.itemRemove}>
                  <button
                    className={classes.removeButton}
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
            <div className={classes.checkoutSummary}>
              <div className={classes.foodsCount}>
                <span>Items: {cart.totalCount}</span>
              </div>
              <div className={classes.totalPrice}>
                <span>Total: </span>
                <Price price={cart.totalPrice} />
              </div>
            </div>

            <Link to="/checkout" className={classes.checkoutButton}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
