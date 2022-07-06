import React, { Component, createRef } from 'react';

export default class AddUserForm extends Component {
  firstNameRef = createRef();
  lastNameRef = createRef();
  emailRef = createRef();
  addressRef = createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const { addUser } = this.props;

    const first_name = this.firstNameRef.current.value;
    const last_name = this.firstNameRef.current.value;
    const email = this.emailRef.current.value;
    const address = this.addressRef.current.value;

    const regex = /\d+/;

    if (regex.test(first_name) || regex.test(last_name)) {
      alert('No numbers allowed!');
      //   this.setState({ warning: 'No numbers in name!' });
      return;
    }

    const newUser = {
      first_name,
      last_name,
      email,
      address
    };

    addUser && addUser(newUser);

    // this.onReset();
    e.target.reset();
  };

  componentDidMount() {
    this.firstNameRef.current.focus();
  }

  focusOnInput = () => {
    this.firstNameRef.current.focus();
  };

  onReset = (e) => {
    // e.target.reset();

    this.lastNameRef.current.value = '';
    this.emailRef.current.value = '';
    this.firstNameRef.current.value = '';
    this.addressRef.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="w-50 m-auto mb-2">
        <text className="font-weight-light">Add User Form</text>
        <hr />
        <div className="form-group m-1">
          <input
            ref={this.firstNameRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="form-group m-1">
          <input
            ref={this.secondNameRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your second name"
            // required
          />
        </div>

        <div className="form-group m-1">
          <input
            ref={this.emailRef}
            type="email"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your e-mail"
            // required
          />
        </div>

        <div className="form-group m-1">
          <input
            ref={this.addressRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your address"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-primary w-50 m-3">
          Add user
        </button>

        <button
          type="button"
          className="btn btn-outline-success w-30 m-3"
          onClick={this.focusOnInput}
        >
          Focus
        </button>

        <button
          type="button"
          className="btn btn-outline-danger w-30 m-3"
          onClick={this.onReset}
        >
          Reset
        </button>
      </form>
    );
  }
}
