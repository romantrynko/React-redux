import React, { Component, createRef } from 'react';

export default class AddUserForm extends Component {
  firstNameRef = createRef();
  lastNameRef = createRef();
  emailRef = createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const { addUser } = this.props;

    const first_name = this.firstNameRef.current.value;
    const last_name = this.firstNameRef.current.value;
    const email = this.emailRef.current.value;

    const regex = /\d+/;

    if (regex.test(first_name) || regex.test(last_name)) {
      alert('No numbers allowed!');
      //   this.setState({ warning: 'No numbers in name!' });
      return;
    }

    const newUser = {
      first_name,
      last_name,
      email
    };

    addUser(newUser);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="w-50 m-auto mb-2">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput"></label>
          <input
            ref={this.firstNameRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2"></label>
          <input
            ref={this.secondNameRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your second name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2"></label>
          <input
            ref={this.emailRef}
            type="email"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your e-mail"
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-primary w-50 m-3">
          Add user
        </button>
      </form>
    );
  }
}
