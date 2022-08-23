import React from 'react';

import Logo from '../../assets/react.png';
import { Link, NavLink } from 'react-router-dom';
import { links, user } from '../../constants';
import { UserInfo } from '../user-info/UserInfo';

import './Header.scss';

export function Header(props) {
  return (
    <header className="my-header navbar">
      <img className="my-header-logo" src={Logo} alt="Logo" />

      <div className="my-header-links-wrapper">
        {links.map((link, index) => {
          return (
            <div className="nav-item" key={index}>
              <NavLink
                className="my-header-links-wrapper-link btn btn-light"
                activeclassname="active"
                to={link.path}
              >
                {link.name}
              </NavLink>
            </div>
          );
        })}
      </div>

      <UserInfo user={user} />
    </header>
  );
}
