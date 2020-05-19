import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li><Link to = '/todo'>todo</Link></li>
        <li><Link to = '/login'>login</Link></li>
        <li><Link to = '/sign'>sign</Link></li>
      </ul>
    </div>
  );
}
export default Header;
