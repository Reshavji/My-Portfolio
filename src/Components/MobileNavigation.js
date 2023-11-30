// MobileNavigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavigation = ({ routes, currentLocation }) => {
  return (
    <div className="mobile-nav">
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route} className={route === currentLocation ? 'active' : ''}>
              {route}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
