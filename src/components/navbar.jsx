import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <nav className='navbar'>
    <NavLink to="/" className="links">Sobre mi</NavLink>
    <NavLink to="/" className="links">Shoots</NavLink>
    <NavLink to="/" className="links">Clientes</NavLink>
    <NavLink to="/" className="links">Contacto</NavLink>
  </nav>
  );
}

export default Navbar;