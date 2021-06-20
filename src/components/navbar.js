import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="/" className="left brand-logo">RBS</a>
                <ul className="right">
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
