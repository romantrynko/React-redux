import React, { Component } from 'react';
import { useRef } from 'react';

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.firstNameRef = React.createRef();
    this.secondNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
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
          />
        </div>
        <button type="submit" className="btn btn-outline-primary w-50 m-3">
          Add user
        </button>
      </form>
    );
  }
}
