import React from 'react';

import './Home.css'

import Projects from './Projects';
import Contact from '../components/Contact';


class Home extends React.Component {
  render() {
    return (
      <div>
        <section id="welcome-section" className="welcome-section">
          <h1 className="introduction">Hi, I'm Alexander</h1>
          <h2 className="sub-introduction">I'm learning web development</h2>
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