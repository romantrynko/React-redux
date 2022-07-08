import React from 'react';
import { usersList } from '../../constants';
import { UserCard } from '../user-card/UserCard';
import { useParams, useHistory, useNavigate } from 'react-router';

const UserPage = ({ users }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { userId } = params;

  const user = users.find((item) => item.id === userId);

  const toUsersList = () => {
    navigate('/users');
  };

  const toHomePage = () => {
    navigate('/home');
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      {!!user && <UserCard user={user} routeUser/>}
      <button
        className="btn btn-outline-dark m-2"
        type="button"
        onClick={toUsersList}
      >
        Users List
      </button>
      <button
        className="btn btn-outline-dark m-2"
        type="button"
        onClick={toHomePage}
      >
        Homepage
      </button>
    </div>
  );
};

export default UserPage;
