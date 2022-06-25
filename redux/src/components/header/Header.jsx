import React from 'react';

import Logo from '../../assets/react.png';
import './Header.scss'

export function Header(props) {
  return (
    <div className="my-header">
      <img src={Logo} alt="Logo" />
    </div>
  );
}
