import React, {Component} from 'react';
import './CSS/ContactPage.css';

export default class Form extends Component{
    render(){
        return(
            <form className="contact_form" action="https://formspree.io/mjvaedva" method="POST">
                <label className="name_label" name="name">Name: </label>
                <input className="name_input" type="text"></input>
                <label className="email_label" name="email">Email: </label>
                <input className="email_input" type="text"></input>
                <label className="message_label" name="message">Message: </label>
                <textarea className="message_input" type="text"></textarea>
                <button className="form_submit_button" type="submit">Submit</button>
            </form>
        )
    }
}