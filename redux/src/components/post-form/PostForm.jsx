import React, { Component } from 'react';

import './AddPostForm.scss';

export default class PostForm extends Component {
  state = {
    title: '',
    body: '',
    user_id: this.props.users[1].id
  };

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onBodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  //   onUserChange = (event) => {
  //     this.setState((prevState, props) => {
  //       return { user_id: props.users[event.target.selectedIndex].id };
  //     });
  //   };

  onUserChange = (event) => {
    const { users } = this.props;

    const selectedIndex = event.target.selectedIndex;
    console.log(selectedIndex);

    this.setState({ user_id: users[selectedIndex].id });
  };

  renderUsersSelect = () => {
    const { users } = this.props;
    const { user_id } = this.state;

    const selectedUser = users.find((user) => user.id === user_id);
    const selectedFullName = `${selectedUser.first_name} ${selectedUser.last_name}`;

    return (
      <select
        value={selectedFullName}
        onChange={this.onUserChange}
        className="btn btn-outline-secondary dropdown-toggle m-2"
      >
        {users.map((user, index) => {
          const fullName = `${user.first_name} ${user.last_name}`;
          return (
            <option key={index} value={fullName}>
              {fullName}
            </option>
          );
        })}
      </select>
    );
  };

  render() {
    const { title, body, user_id } = this.state;

    return (
      <form className="my-add-post-form">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput"></label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your name"
            value={title}
            onChange={this.onTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2"></label>
          <textarea
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter post here..."
            value={body}
            onChange={this.onBodyChange}
          />
            </div>
            <hr/>
        {this.renderUsersSelect()}
      </form>
    );
  }
}
