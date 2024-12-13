import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import classes from './header.module.css';
import { useAuth } from '../../hooks/useAuth';

export default function Header({ toggleTheme, theme }) {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          BiteHub
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/dashboard">Dashboard</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            {/* Theme toggle button */}
            <div>
              <a onClick={toggleTheme} className={classes.themeToggle}>
                 {theme === 'light' ? 'Dark Mode' : 'Light Mode'} 
              </a>
            </div>

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
