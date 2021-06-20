import React from 'react'

function Navbar() {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="#" className="brand-logo">RBS</a>
                <ul className="right">
                    <li>
                        <a href="/home">Homepage</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
