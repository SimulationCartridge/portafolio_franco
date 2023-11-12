import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <nav className='navbar'>
    <NavLink to="/" className="links">Inicio</NavLink>
    <NavLink to="/" className="links">Sobre mi</NavLink>
    <NavLink to="/" className="links">Curriculum</NavLink>
  </nav>
  );
}

export default Navbar;