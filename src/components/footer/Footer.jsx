import React from 'react';

import { socialMediaIcons } from '../../constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="my-footer">
      <div className="my-footer-content">
        <div>Some text about authors</div>

        <div className="my-footer-social-media-wrapper">
          {socialMediaIcons.map((icon, index) => (
            <img
              className="my-footer-social-media-icon"
              src={icon.src}
              alt={icon.alt}
              key={index}
            />
          ))}
        </div>
      </div>
      <div>All rights reserved. Redux ©2022</div>
    </div>
  );
};
