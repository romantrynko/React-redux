import React from 'react';

import Logo from '../../assets/react.png';
import './Header.scss';

export function Header(props) {
  return (
    <div className="my-header">
      <img className="my-header-logo" src={Logo} alt="Logo" />
    </div>
  );
}
