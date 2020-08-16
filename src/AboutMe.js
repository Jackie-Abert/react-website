import React from 'react';
import jackiebishop13 from './Images/jackieBishop13.jpg';
import './CSS/AboutMe.css'

export default function AboutMe() {
    return (
        
        <section className="aboutme_section">
            <div className="aboutme_image_container">
                <img class="aboutme_image" src={jackiebishop13} alt="JackieBishop"></img>
             </div>
            <article className="aboutme_text">
                <p>Designing websites was always the next big step for me after graduating art school and I am finally making that dream a reality.</p>
                <p>I love the entire creative process, from concept to creation, and I especially enjoy working with people who share the same passions for code and design as I do. I look forward to joining a team of like minded, fun loving geeks like me. </p>
                <p>When I'm not coding or designing, I like spending time outside with my kids and gaming with my hubby. My family is my life, and everything I do is for them.</p>
            </article>
        </section>
    )
}