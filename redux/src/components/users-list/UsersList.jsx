import React, { Component, useEffect, useState } from 'react';
import { UserCard } from '../user-card/UserCard';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export default function UsersList({ routeUser, users }) {
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setPage(queryString.parse(location.search));
  }, []);

  return (
    <div className="users d-flex flex-column">
      <hr />
      <div className="d-flex flex-row">
        {users &&
          users.map((user, key) => {
            return <UserCard user={user} key={key} routeUser={routeUser} />;
          })}
      </div>
    </div>
  );
}
