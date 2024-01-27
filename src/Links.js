// Links.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Links = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Quick Links</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/login" className="text-decoration-none">Members Login</Link>
        </li>
        {/* Add other links as needed */}
      </ul>
    </div>
  );
};


export default Links;