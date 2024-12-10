import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import classes from './tags.module.css';

export default function Tags({ tags, forFoodPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className={classes.container}>
      <div className={classes.dropdown}>
        <button className={classes.dropdownButton} onClick={toggleDropdown}>
          Categories {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`${classes.dropdownContent} ${
            isOpen ? classes.show : ''
          }`}
        >
          {tags.map(tag => (
            <Link
              key={tag.name}
              to={`/tag/${tag.name}`}
              className={classes.dropdownItem}
              onClick={handleItemClick} // Close dropdown on item click
            >
              {tag.name}
              {!forFoodPage && ` (${tag.count})`}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
