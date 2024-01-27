// Links.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <div>
      <h2>Quick Links</h2>
      <ul>
        <li>
          <NavLink to="/login">Members Login</NavLink>
        </li>
        {/* Add other links as needed */}
      </ul>
    </div>
  );
};

export default Links;