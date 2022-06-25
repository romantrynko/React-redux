import React from 'react';

import Logo from '../../assets/react.png';
import { links } from '../../constants';

import './Header.scss';

export function Header(props) {
  return (
    <header className="my-header navbar">
      <img className="my-header-logo" src={Logo} alt="Logo" />

      <div className="my-header-links-wrapper">
        {links.map((link, key) => {
          return (
            <div className="nav-item" key={key}>
              <a className="my-header-links-wrapper-link" href={link.url}>
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </header>
  );
}
