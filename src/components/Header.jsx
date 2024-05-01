import React from 'react';

const Header = () => {
    return (
        <header className="blog-header">
            <h1 className="blog-title">Sartre's List</h1>
            <h2 className="blog-subtitle">Better-Dressed People</h2>
            <nav className="blog-nav">
                <ul>
                    <li><a href="/womens">Women's</a></li>
                    <li><a href="/mens">Men's</a></li>
                    <li><a href="/on-the-street">On the Street</a></li>
                    <li><a href="/thecatwalk">The Catwalk</a></li>
                    <li><a href="/adwatch">AdWatch</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

