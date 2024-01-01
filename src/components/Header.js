// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', background: 'lightgray', zIndex: 1000 }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                <div style={{ fontWeight: 'bold' }}>My Blog</div>
                <div>
                    <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
                    <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
                    <NavLink to="/admin" style={{ margin: '0 10px' }}>Admin</NavLink>
                    {/* More navigation links here */}
                    <div style={{ display: 'inline-block', margin: '0 10px' }}>
                        Categories
                        <div style={{ position: 'absolute' }}>
                            <NavLink to="/category/technology" style={{ display: 'block', margin: '5px 0' }}>Technology</NavLink>
                            <NavLink to="/category/lifestyle" style={{ display: 'block', margin: '5px 0' }}>Lifestyle</NavLink>
                            {/* More dropdown links here */}
                        </div>
                    </div>
                    <NavLink to="/contact" style={{ margin: '0 10px' }}>Contact</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;

