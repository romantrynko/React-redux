import React, { Component } from 'react';
import { UserCard } from '../user-card/UserCard';
import { usersList } from '../../constants/index';

export default class UsersList extends Component {
  state = {
    users: usersList
  };
  render() {
    const { users } = this.state;
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
}
