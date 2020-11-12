import React, {Component} from 'react';
import illustrator from './Images/logos/adobe-illustrator-cs6.png';
import photoshop from './Images/logos/adobe-photoshop-cs6.png';
import css3 from './Images/logos/css3.png';
import html5 from './Images/logos/html5.png';
import javascript from './Images/logos/javascript.png';
import nodejs from './Images/logos/nodejs-1.png';
import nodejsicon from './Images/logos/nodejs-icon.png';
import postgresql from './Images/logos/postgresql.png';
import react from './Images/logos/react.png';
import './CSS/Skills.css'

export default class Skills extends Component{
    render(){
        return(
        <>
            <div className="skills_container">
                <fieldset>
                    <legend id="skills">Skills</legend>
                    <div>
                    <ul className="learned_skills">
                        <li><img className="skills_image" src={javascript} alt="javascript" /><div>Javascript</div></li>
                        <li><img className="skills_image" src={react} alt="react" /><div>React</div></li>
                        <li><img className="skills_image" src={nodejsicon} alt="node.js" /><div>Node.js</div></li>
                        <li><img className="skills_image" src={html5} alt="html5" /><div>HTML5</div></li>
                        <li><img className="skills_image" src={css3} alt="css3" /><div>CSS3</div></li>
                        <li><img className="skills_image" src={postgresql} alt="postgresql" /><div>PostgreSQL</div></li>
                        <li><img className="skills_image" src={illustrator} alt="illustrator" /><div>Illustrator</div></li>
                        <li><img className="skills_image" src={photoshop} alt="photoshop" /><div>Photoshop</div></li>
                    </ul>
                    </div>
                
                    <br/>
                    <br/>
                    <br/>
                
                    <div className="loading">
                        <h2 className="animation_text">“Anyone who stops learning is old, whether at twenty or eighty.”
                            — Henry Ford</h2><h2 className="animation_text_p">Currently downloading new skill sets</h2>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </fieldset>
            </div>
        </>
        )
    }
}