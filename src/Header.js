import React from 'react';
import NavBar from './NavBar';
import './CSS/HeaderNav.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className="header_container">
            <Link className="home_link" to='/home'><h1 className="header_title">JB</h1></Link>
            <NavBar />
        </header>
    )
}