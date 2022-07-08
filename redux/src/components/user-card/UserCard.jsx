import React, { createContext, PureComponent, useContext } from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';
import { useLocation, useParams, withRouter } from 'react-router';
import { UserContext } from '../../App';

export function UserCard({ user, routeUser }) {
  // const userr = useContext(UserContext);
  // console.log(userr);
  
  const location = useLocation();

  const { pathname } = location;

  if (!user) return null;

  const {
    first_name,
    last_name,
    email,
    address,
    _links: { avatar } = {}
  } = user;

  return (
    <div className="my-user-card card">
      {/*<img src={`${avatar.href}?dummy=${Math.random() * 1000}`} alt="user avatar" className="may-user-card-avatar rounded-circle"/>*/}

      <div className="card-body">
        <h4 className="card-title">
          {first_name} {last_name}
        </h4>
        <div className="card-text">
          <div>{email}</div>
          <div>{address}</div>
        </div>
      </div>

      {!routeUser && (
        <Link className="btn btn-outline-dark" to={`${pathname}/${user.id}`}>
          Show details
        </Link>
      )}
    </div>
  );
}

// export const UserCard = withRouter(UserCardComponent);
