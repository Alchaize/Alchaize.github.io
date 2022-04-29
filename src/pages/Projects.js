import image_survey from '../pics/Survey-Form.png'
import image_docs from '../pics/java-thing.png'
import image_product from '../pics/Product-landing-page.png';

function Projects() {
    return (
        <div>
            <section id="projects" class="projects">
            <h2 class="project-header">These are some of my projects</h2>
            
            <div class="projects-grid">
                
                <a class="project-tile"
                href="https://codepen.io/alchaize/full/xxRmwQP"
                target="_blank"
                rel="noreferrer"
                >
                <div class="project-image">
                    <img
                    class="project-image"
                    src={image_product}
                    alt="project"/>
                </div>
                <p class="project-name">
                    Project Landing Page
                </p>
                </a>
                
                <a class="project-tile"
                href="https://codepen.io/alchaize/full/wvoQrvr"
                target="_blank"
                rel="noreferrer"
                >
                <div class="project-image">
                    <img
                class="project-image"
                src={image_survey}
                alt="project"
                    />
                </div>
                <p class="project-name">
                    Survey Form
                </p>
                </a>
                
                <a class="project-tile"
                href="https://codepen.io/alchaize/full/GRNzQZp"
                target="_blank"
                rel="noreferrer"
                >
                <div class="project-image">
                    <img
                class="project-image"
                src={image_docs}
                alt="project"
                    />
                </div>
                <p class="project-name">
                    JavaScript Documentation
                </p>
                </a>
                
                
                <a class="project-tile"
                href="https://codepen.io/alchaize/full/jOVQwYb"
                target="_blank"
                rel="noreferrer"
                >
                <div class="project-image">
                    <img
                class="project-image"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg"
                alt="project"
                    />
                </div>
                <p class="project-name">
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