import React, { Component } from 'react';
import './CSS/ContactPage.css'
import Form from './Form';

export default class ContactPage extends Component{
    render(){
        return(
            <div className="contact_form_container">
                <div class="contact_text">
                    <h2>Contact</h2>
                    <p>If you like what you see and are interested in hiring me for your next project, send me an email and let's schedule some time to talk. 
                    </p>
                    <ul>Be sure to check me out on:
                    <li><a href="https://www.linkedin.com/in/jacqueline-bishop-751b151aa" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/JackieBishop" target="_blank" >GitHub</a></li>
                    <li><a href="mailto:jax.bishop.webdev@gmail.com?subject=We%20are%20interested!!">jax.bishop.webdev@gmail.com</a></li>
                        </ul>
                </div>
                <Form />
            </div>
        )
    }
}