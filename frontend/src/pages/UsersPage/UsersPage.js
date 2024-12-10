import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getAll, toggleBlock } from '../../services/userService';
import classes from './usersPage.module.css';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { searchTerm } = useParams();
  const auth = useAuth();

  useEffect(() => {
    loadUsers();
  }, [searchTerm]);

  const loadUsers = async () => {
    const usersData = await getAll(searchTerm);
    setUsers(usersData);
  };

  const handleToggleBlock = async (userId) => {
    const isBlocked = await toggleBlock(userId);
    setUsers((oldUsers) =>
      oldUsers.map((user) => (user.id === userId ? { ...user, isBlocked } : user))
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage Users" />
        <Search
          searchRoute="/admin/users/"
          defaultRoute="/admin/users"
          placeholder="Search Users"
          margin="1rem 0"
        />
        <div className={classes.tableHeader}>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Address</h3>
          <h3>Allergies</h3>
          <h3>Dietary Restrictions</h3>
          <h3>Admin</h3>
          <h3>Actions</h3>
        </div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className={classes.tableRow}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.address}</span>
              <span>{user.allergies}</span>
              <span>{user.dietaryRestrictions}</span>
              <span className={user.isAdmin ? classes.admin : classes.notAdmin}>
                {user.isAdmin ? '✅' : '-'}
              </span>
              <span className={classes.actions}>
                <Link to={`/admin/editUser/${user.id}`} className={classes.editBtn}>
                  Edit
                </Link>
                {auth.user.id !== user.id && (
                  <Link
                    onClick={() => handleToggleBlock(user.id)}
                    className={user.isBlocked ? classes.unblockBtn : classes.blockBtn}
                  >
                    {user.isBlocked ? 'Unblock' : 'Block'}
                  </Link>
                )}
              </span>
            </div>
          ))
        ) : (
          <div className={classes.noUsers}>No users found</div>
        )}
      </div>
    </div>
  );
}
