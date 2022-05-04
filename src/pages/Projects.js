import { Link } from "react-router-dom";

import './Projects.css';

import image_survey from '../pics/Survey-Form.png'

import image_product from '../pics/Product-landing-page.png';
import image_tictactoe from '../pics/tictactoe.png';

function Projects() {
    return (
        <div>
            <section id="projects" className="projects">
            <h2 className="project-header">These are some stuff I have made</h2>
            
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
            
            </div>
            <a id="profile-link" href="https://codepen.io/alchaize/" target="_blank" rel="noreferrer">
                See the rest on Codepen
            </a>
            </section>
        </div>
    )
}

export default Projects;