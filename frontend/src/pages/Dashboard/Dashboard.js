import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              className={classes.menuItem}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <div className={classes.iconContainer}>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h2 className={classes.itemTitle}>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
    bgColor: '',
    color: 'teal',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
    bgColor: '',
    color: 'teal',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
    bgColor: '',
    color: 'teal',
  },
  {
    title: 'Foods',
    imageUrl: '/icons/foods.svg',
    url: '/admin/foods',
    forAdmin: true,
    bgColor: '',
    color: 'teal',
  },
];
