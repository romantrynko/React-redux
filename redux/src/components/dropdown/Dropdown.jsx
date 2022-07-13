import React, { Component, createRef } from 'react';

import './Dropdown.scss';

export class Dropdown extends Component {
  state = {
    isOpen: false
  };
  dropDownRef = createRef();

  componentDidMount() {
    document.addEventListener('click', this.onClose);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClose);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onOptionSelect = (event) => {
    const { onSelect } = this.props;

    const value = event.target.getAttribute('data-value');
    console.log('onOptionSelect', value);

    onSelect && onSelect(value);

    this.setState({ isOpen: false });
  };

  onClose = (event) => {
    if (this.dropDownRef && !this.dropDownRef.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { options, selectedOption } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="dropdown-closed" ref={this.dropDownRef}>
        <div onClick={this.toggle} className="dropdown-toggle">
          {selectedOption}
        </div>

        {!!isOpen && (
          <div className="my-drop-down-options-wrapper dropdown-menu show">
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
