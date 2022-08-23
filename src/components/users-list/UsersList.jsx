import React, { useEffect, useState } from 'react';
import { UserCard } from '../user-card/UserCard';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { connect } from 'react-redux';

function UsersList({ routeUser, users }) {
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setPage(queryString.parse(location.search));
  }, []);

  return (
    <div className="users d-flex flex-column">
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {users &&
          users.map((user, key) => {
            return <UserCard user={user} key={key} routeUser={routeUser} />;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const users = state.userReducer;
  return users;
};

export default connect(mapStateToProps)(UsersList);
