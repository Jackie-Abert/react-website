import React, {Component} from 'react';
import './CSS/HeaderNav.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
 
    render(){
        return(
            <nav className="header_nav">
                <div className="nav_open">
                    <div className="nav_links"><Link className="nav_hidden projects_link" to='/projects'>Projects</Link></div>
                    <div className="nav_links"><Link className="nav_hidden about_link" to='/about'>About</Link></div>
                    <div className="nav_links"><Link className="contact_link" to='/contact'>Contact</Link></div>
                </div>
            </nav>
        )
    }
}