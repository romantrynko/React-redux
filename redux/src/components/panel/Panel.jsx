import React, { Component } from 'react';
import Chevron from '../../assets/chevron-bottom.png';

import './Panel.scss';

export default class Panel extends Component {
  constructor(props) {
    super(props);

    const { isOpenByDefault } = this.props;

    this.state = {
      isOpen: isOpenByDefault,
      value: 'Enter something here'
    };
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ chevronUp: !this.state.chevronUp });
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { children, label } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="my-panel card">
        {/* <input type="text" value={this.state.value} onChange={this.onChange} /> */}
        <div className="my-panel-header card-header">
          <div>{label}</div>
          <div className={`my-panel-header-chevron ${isOpen ? 'up' : ''}`}>
            <img onClick={this.onClick} src={Chevron} alt="chevron" />
          </div>
        </div>
        {isOpen && <div className="card-body">{children}</div>}
      </div>
    );
  }
}
