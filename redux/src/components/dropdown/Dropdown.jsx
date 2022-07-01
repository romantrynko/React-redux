import React, { Component } from 'react';

import './Dropdown.scss';

export class Dropdown extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onOptionSelect = (event) => {
    const { onSelect } = this.props;

    const value = event.target.getAttribute('data-value');
    console.log(value);

    onSelect(value);

    this.setState({ isOpen: false });
  };

  render() {
    const { options = [], selectedOption } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="my-drop-down dropdown">
        <div onClick={this.toggle} className="dropdown-toggle">
          {selectedOption}
        </div>

        {!!isOpen && (
          <div className="may-drop-down-options-wrapper dropdown-menu show">
            {options.map((option) => {
              return (
                <div
                  className="my-drop-down-options-wrapper-option dropdown-item"
                  key={option}
                  data-value={option}
                  onClick={this.onOptionSelect}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}