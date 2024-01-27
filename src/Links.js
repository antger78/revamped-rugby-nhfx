// Links.js

import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
      <h2>Quick Links</h2>
      <ul>
        <li>
          <Link to="/login">Members Login</Link>
        </li>
        {/* Add other links as needed */}
      </ul>
    </div>
  );
};

export default Links;