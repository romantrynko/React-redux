import React from 'react';
import { UserCard } from '../user-card/UserCard';

export default function UsersList(props) {
  const { users } = props;
  return (
    <div className="d-flex flex-column">
      
      <hr />
      <div className="d-flex flex-row">
        {users &&
          users.map((user, key) => {
            return <UserCard user={user} key={key} />;
          })}
      </div>
    </div>
  );
}
