import React, { useEffect } from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';
import withRouter, { useLocation, useNavigate } from 'react-router';

export const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state === null || state === undefined) {
      navigate('/users');
      
      console.log(state);
      console.log(navigate);
    }
  }, []);

  if (!user) return null;

  const { first_name, last_name, email, address = '', _links = '' } = user;

  return (
    <div className="my-user-card card m-2 p-2">
      {/* <img
        className="my-user-card-avatar rounded-circle"
        src={_links.avatar.href}
        alt="avatar"
      /> */}
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

      <Link className="btn btn-outline-info m-3" to={`/${user.id}`}>
        Show details
      </Link>
    </div>
  );
};
