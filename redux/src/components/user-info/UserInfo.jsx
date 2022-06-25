import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, avatar } = user;

  return (
    <div className="user-info">
      <img className="user-info-avatar rounded-circle" src={avatar} alt="" />
      <div className="user-info-details">
        <span>
          {firstName} {lastName}
        </span>
      </div>
    </div>
  );
};
