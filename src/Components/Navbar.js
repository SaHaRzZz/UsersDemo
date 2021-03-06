import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Users Demo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/UsersDemo">Home</Link>
                    <Link className="nav-item nav-link" to="/Features">Features</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/Login">Login</Link>
                    <Link className="nav-item nav-link" to="/Register">Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;