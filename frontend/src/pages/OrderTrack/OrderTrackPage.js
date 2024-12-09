import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { trackOrderById, updateFoodStatus } from '../../services/orderService'; // Make sure to import the update function
import NotFound from '../../components/NotFound/NotFound';
import classes from './orderTrackPage.module.css';
import DateTime from '../../components/DateTime/DateTime';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Title from '../../components/Title/Title';
import Map from '../../components/Map/Map';

export default function OrderTrackPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (orderId) {
      trackOrderById(orderId).then(order => {
        setOrder(order); // Set order details
      }).catch(() => {
        navigate('/orders'); // Redirect if order is not found
      });
    }
  }, [orderId, navigate]);

  const handleFoodStatusUpdate = async () => {
    try {
      const updatedOrder = await updateFoodStatus(order.id, 'PICKED UP');
      setOrder(updatedOrder); // Update local state with the new foodStatus
    } catch (error) {
      console.error('Failed to update food status', error);
    }
  };

  if (!orderId) {
    return <NotFound message="Order Not Found" linkText="Go To Home Page" />;
  }

  return (
    order && (
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>Order #{order.id}</h1>
          <div className={classes.header}>
            <div>
              <strong>Date</strong>
              <DateTime date={order.createdAt} />
            </div>
            <div>
              <strong>Name</strong>
              {order.name}
            </div>
            <div>
              <strong>Address</strong>
              {order.address}
            </div>
            <div>
              <strong>State</strong>
              {order.status}
            </div>
            <div>
              <strong>Food Status</strong>
              <span className={classes.status}>{order.foodStatus}</span> {/* Display food status */}
            </div>
            {/* Display button to update food status only if foodStatus is 'READY FOR PICKUP' */}
            {order.foodStatus === 'READY FOR PICKUP' && (
              <div className={classes.foodStatusButton}>
                <button onClick={handleFoodStatusUpdate}>Mark as Picked Up</button>
              </div>
            )}

            {order.paymentId && (
              <div>
                <strong>Payment ID</strong>
                {order.paymentId}
              </div>
            )}
          </div>

          <OrderItemsList order={order} />
        </div>

        <div>
          <Title title="Your Location" fontSize="1.6rem" />
          <Map location={order.addressLatLng} readonly={true} />
        </div>

        {order.status === 'NEW' && (
          <div className={classes.payment}>
            <Link to="/payment">Go To Payment</Link>
          </div>
        )}
      </div>
    )
  );
}
