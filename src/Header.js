import React from 'react';
import NavBar from './NavBar';
import './CSS/HeaderNav.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className="header_container">
            <a className="header_title" href="home">JB</a>
            <NavBar />
        </header>
    )
}