import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar my-navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">Pet Shelter</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/pets/new">Add New Pet</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
