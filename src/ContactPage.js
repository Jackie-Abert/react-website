import React, { Component } from 'react';
import './CSS/ContactPage.css'
import Form from './Form';
import email from './Images/contact/email.png'
import linkedin from './Images/contact/linkedin.png'
import github from './Images/contact/github.png'

export default class ContactPage extends Component{
    state = {
        opacity:"op1"
    }
    handleScroll = e => {
        if (window.scrollY > 400) {
          this.setState({opacity: "op1"})
        }
        if (window.scrollY < 400) {
            this.setState({opacity:"op1"})
        }
      }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }
    render(){
        return( 
            <div 
            onScroll={this.handleScroll}
            className={`contact_background ${this.state.opacity}`}>
            <div id="contact" className="contact_form_container">
                <div className="contact_text">
                    <p>If you like what you see and are interested in hiring me for your next project, send me an email and let's schedule some time to talk. 
                    </p>
                    <ul>Be sure to check me out on:
                    <li><a href="https://www.linkedin.com/in/jackie-bishop/" target="_blank" rel="noopener noreferrer"><img className="contact_logo" src={linkedin} alt="linkedin"/>LinkedIn</a></li>
                    <li><a href="https://github.com/Jackie-Abert" target="_blank" rel="noopener noreferrer"><img className="contact_logo" src={github} alt="github"/>GitHub</a></li>
                    <li><a href="mailto:jax.bishop.webdev@gmail.com?subject=We%20are%20interested!!"><img className="contact_logo" src={email} alt="email"/>jax.bishop.webdev@gmail.com</a></li>
                        </ul>
                </div>
                <Form />
            </div>
            </div>
        )
    }
}