import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <h1>
            TechyStar.</h1>
            <main>
                <Link to={"/home"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <Link to={"/#brands"}>Brands</Link>
                <Link to={"/services"}>Services</Link>
            </main>
        
    </nav>
  );
};

export default Header;