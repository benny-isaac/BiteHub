import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createOrder } from '../../services/orderService';
import classes from './checkoutPage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';

export default function CheckoutPage() {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });
  const [loyaltyPoints, setLoyaltyPoints] = useState(Math.floor(Math.random() * 100)); // Random loyalty points
  const [pointsToRedeem, setPointsToRedeem] = useState(0);
  const [cartTotal, setCartTotal] = useState(cart.totalPrice); // Track cart total price
  const [discountAmount, setDiscountAmount] = useState(0); // Track total discount applied

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Function to generate random coordinates (latitude and longitude)
  const generateRandomCoordinates = () => {
    const latitude = (Math.random() * 180 - 90).toFixed(6);
    const longitude = (Math.random() * 360 - 180).toFixed(6);
    return { lat: latitude, lng: longitude };
  };

  // Handle points redemption
  const handleRedeemPoints = () => {
    const discountValue = pointsToRedeem / 10; // 10 points = $1 discount
    if (pointsToRedeem > loyaltyPoints) {
      toast.error('You cannot redeem more points than you have.');
    } else if (discountValue > cartTotal) {
      toast.error('Points exceed cart total.');
    } else {
      const newTotal = cartTotal - discountValue; // Calculate the new total
      setCartTotal(newTotal); // Update cart total
      setLoyaltyPoints(loyaltyPoints - pointsToRedeem); // Deduct redeemed points
      setOrder({ ...order, totalPrice: newTotal }); // Reflect the new total in the order
      setDiscountAmount(discountAmount + discountValue); // Update the total discount applied
      setPointsToRedeem(0); // Clear the input field
      toast.success(`${pointsToRedeem} points redeemed!`);
    }
  };

  const submit = async data => {
    const randomCoordinates = generateRandomCoordinates();

    await createOrder({
      ...order,
      name: data.name,
      address: data.address,
      addressLatLng: randomCoordinates,
      totalPrice: cartTotal, // Pass the updated cart total
    });

    navigate('/payment'); // Redirect to payment page
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={classes.container}>
      <div className={classes.content}>
        <Title title="Order Form" fontSize="1.6rem" />
        <div className={classes.inputs}>
          <Input
            defaultValue={user.name}
            label="Name"
            {...register('name')}
            error={errors.name}
          />
          <Input
            defaultValue={user.address}
            label="Address"
            {...register('address')}
            error={errors.address}
          />
        </div>
        <OrderItemsList order={order} />
      </div>

      <div className={classes.loyalty_section}>
        <h3>Loyalty Points</h3>
        <p>You have {loyaltyPoints} points available.</p>
        <div className={classes.redeem_section}>
          <label htmlFor="pointsToRedeem">Points to Redeem:</label>
          <input
            type="number"
            id="pointsToRedeem"
            value={pointsToRedeem === 0 ? '' : pointsToRedeem} // Show empty when value is 0
            onChange={e => {
              const value = e.target.value;
              setPointsToRedeem(value === '' ? 0 : Number(value)); // Reset to 0 if input is cleared
            }}
            min="0"
            max={loyaltyPoints}
          />
          <Button
            type="button"
            text="Redeem Points"
            onClick={handleRedeemPoints}
          />
        </div>
        <p>Cart Total: ${cartTotal.toFixed(2)}</p>
        <p>Total Discount Applied: ${discountAmount.toFixed(2)}</p>
      </div>

      <div className={classes.buttons_container}>
        <Button
          type="submit"
          text="Go To Payment"
          width="100%"
          height="3rem"
        />
      </div>
    </form>
  );
}
