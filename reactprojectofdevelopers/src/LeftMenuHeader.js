// LeftMenuHeader.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LeftMenuHeader.css'; // Import the CSS file for LeftMenuHeader styles

const LeftMenuHeader = ({ title, to, className }) => (
  <li>
    {/* Add className prop to the Link component */}
    <Link to={to} className={`menu-link ${className}`}>{title}</Link>
  </li>
);

export default LeftMenuHeader;
