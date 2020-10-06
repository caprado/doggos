import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Nav = () => {
  
  return (
    <header>
        <nav className="menu-wrapper">
            <ul className="menu-list">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/add-dog">Add Dog</Link></li>
                <li className="menu-item"><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    </header>
  );
};