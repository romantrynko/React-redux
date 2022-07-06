import React from 'react';
import './UserCard.scss';

export const UserCard = ({ user }) => {
  if (!user) return null;

  const { first_name, last_name, email, address = '', _links = '' } = user;

  return (
    <div className="my-user-card card m-2 p-2">
      <img
        className="my-user-card-avatar rounded-circle"
        src={_links.avatar.href}
        alt="avatar"
      />
      <div className="card-body">
        <h5 className="card-title">
          {first_name} {last_name}
        </h5>
        <hr />
      </div>
      <div className="card-text">
        <div>{email}</div>
        <hr />
        <div>{address}</div>
      </div>
    </div>
  );
};
