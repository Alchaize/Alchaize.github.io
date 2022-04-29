import '../App.css';
import React from 'react';

import Projects from './Projects';
import Contact from './Contact';


class Home extends React.Component {
  render() {
    return (
      <div>
        <section id="welcome-section" class="welcome-section">
          <h1 class="introduction">Hi, I'm Alexander</h1>
          <h2 class="sub-introduction">I'm learning web development</h2>
        </section>
        
        <Projects />
        <Contact />

        
        <footer>
          
        </footer>
    </div>
    );
  }
}

export default Home;