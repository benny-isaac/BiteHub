// import React, { useState } from 'react';
// import { useCart } from '../../hooks/useCart';
// import { useAuth } from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { createOrder } from '../../services/orderService';
// import classes from './checkoutPage.module.css';
// import Title from '../../components/Title/Title';
// import Input from '../../components/Input/Input';
// import Button from '../../components/Button/Button';
// import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';

// export default function CheckoutPage() {
//   const { cart } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [order, setOrder] = useState({ ...cart });

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   const submit = async (data) => {
//     // Check if the required fields are filled
//     if (!data.name || !data.address) {
//       toast.warning('Please fill in all required fields');
//       return;
//     }
    
//     // Create the order without relying on the map
//     await createOrder({ ...order, points: data.points, name: data.name, address: data.address });
//     navigate('/payment');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(submit)} className={classes.container}>
//         <div className={classes.content}>
//           <Title title="Order Form" fontSize="1.6rem" />
//           <div className={classes.inputs}>
//             <Input
//               defaultValue={user.name}
//               label="Name"
//               {...register('name', { required: 'Name is required' })}
//               error={errors.name}
//             />
//             <Input
//               defaultValue={user.address}
//               label="Address"
//               {...register('address', { required: 'Address is required' })}
//               error={errors.address}
//             />
//           </div>
//           <OrderItemsList order={order} />
//         </div>
        
//         <div className={classes.buttons_container}>
//           <div className={classes.buttons}>
//             <Button
//               type="submit"
//               text="Go To Payment"
//               width="100%"
//               height="3rem"
//             />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Function to generate random coordinates (latitude and longitude)
  const generateRandomCoordinates = () => {
    const latitude = (Math.random() * 180 - 90).toFixed(6); // Generates random latitude between -90 and 90
    const longitude = (Math.random() * 360 - 180).toFixed(6); // Generates random longitude between -180 and 180
    return { lat: latitude, lng: longitude };
  };

  const submit = async data => {
    const randomCoordinates = generateRandomCoordinates();

    // Add random coordinates to the order object
    setOrder({ ...order, addressLatLng: randomCoordinates });

    await createOrder({ ...order, points: data.points, name: data.name, address: data.address, addressLatLng: randomCoordinates });
    navigate('/payment');
  };

  return (
    <>
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
        
        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <Button
              type="submit"
              text="Go To Payment"
              width="100%"
              height="3rem"
            />
          </div>
        </div>
      </form>
    </>
  );
}
