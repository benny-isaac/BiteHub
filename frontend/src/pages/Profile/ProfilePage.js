import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import classes from './profilePage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

export default function ProfilePage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user, updateProfile } = useAuth();

  const submit = (data) => {
    updateProfile(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Update Your Profile" />
        <form onSubmit={handleSubmit(submit)} className={classes.form}>
          <Input
            defaultValue={user.name}
            type="text"
            label="Full Name"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 5, message: 'Name must be at least 5 characters' },
            })}
            error={errors.name}
          />
          <Input
            defaultValue={user.address}
            type="text"
            label="Address"
            {...register('address', {
              required: 'Address is required',
              minLength: { value: 10, message: 'Address must be at least 10 characters' },
            })}
            error={errors.address}
          />

          <Button type="submit" text="Update Profile" backgroundColor="#4CAF50" />
        </form>

        <div className={classes.passwordChange}>
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}
