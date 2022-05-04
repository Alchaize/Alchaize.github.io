import { Link } from "react-router-dom";

import './Projects.css';

import image_survey from '../pics/Survey-Form.png'
import image_docs from '../pics/java-thing.png'
import image_product from '../pics/Product-landing-page.png';
import image_tictactoe from '../pics/tictactoe.png';

function Projects() {
    return (
        <div>
            <section id="projects" className="projects">
            <h2 className="project-header">These are some of my projects</h2>
            
            <div className="projects-grid">
                    
                <Link to="/game" className="project-tile">                
                    <div className="project-image">
                        <img
                        className="project-image"
                        src={image_tictactoe}
                        alt="project"/>
                    </div>
                    <p className="project-name">
                        Tic-Tac-Toe
                    </p>
                </Link>

                <a className="project-tile"
                href="https://codepen.io/alchaize/full/xxRmwQP"
                target="_blank"
                rel="noreferrer"
                >
                <div className="project-image">
                    <img
                    className="project-image"
                    src={image_product}
                    alt="project"/>
                </div>
                <p className="project-name">
                    Project Landing Page
                </p>
                </a>
                
                <a className="project-tile"
                href="https://codepen.io/alchaize/full/wvoQrvr"
                target="_blank"
                rel="noreferrer"
                >
                <div className="project-image">
                    <img
                className="project-image"
                src={image_survey}
                alt="project"
                    />
                </div>
                <p className="project-name">
                    Survey Form
                </p>
                </a>
                
                <a className="project-tile"
                href="https://codepen.io/alchaize/full/GRNzQZp"
                target="_blank"
                rel="noreferrer"
                >
                <div className="project-image">
                    <img
                className="project-image"
                src={image_docs}
                alt="project"
                    />
                </div>
                <p className="project-name">
                    JavaScript Documentation
                </p>
                </a>
                
                
                <a className="project-tile"
                href="https://codepen.io/alchaize/full/jOVQwYb"
                target="_blank"
                rel="noreferrer"
                >
                <div className="project-image">
                    <img
                className="project-image"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg"
                alt="project"
                    />
                </div>
                <p className="project-name">
                    Tribute Page
                </p>
                </a>
            </div>
            <a id="profile-link" href="https://codepen.io/alk4de" target="_blank" rel="noreferrer">
                See all projects
            </a>
            </section>
        </div>
    )
}

export default Projects;