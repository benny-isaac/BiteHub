import React, { useState, useEffect } from 'react';
import classes from './paymentPage.module.css';
import { getNewOrderForCurrentUser } from '../../services/orderService';
import Title from '../../components/Title/Title';
import Price from '../../components/Price/Price';
import PaypalButtons from '../../components/PaypalButtons/PaypalButtons';

export default function PaymentPage() {
  const [order, setOrder] = useState();

  useEffect(() => {
    getNewOrderForCurrentUser().then(data => setOrder(data));
  }, []);

  if (!order) return null;

  // The latitude and longitude are included in the order but not displayed
  const { addressLatLng, totalPrice } = order;
  const latitude = addressLatLng ? addressLatLng.lat : null;
  const longitude = addressLatLng ? addressLatLng.lng : null;

  // Combine the order with the latitude, longitude, and hidden information
  const orderWithCoordinates = {
    ...order,
    latitude,
    longitude,
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title="Payment" fontSize="1.6rem" />

        {/* Total Price Section */}
        <div className={classes.totalPriceSection}>
          <h3>Total Amount:</h3>
          <div className={classes.totalPrice}>
            <Price price={totalPrice} />
          </div>
        </div>
      </div>

      <div className={classes.buttonsContainer}>
        <div className={classes.buttons}>
          {/* Pass the full order with coordinates to the PaypalButtons */}
          <PaypalButtons order={orderWithCoordinates} />
        </div>
      </div>
    </div>
  );
}
