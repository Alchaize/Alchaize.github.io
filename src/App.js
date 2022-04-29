import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import Game from './pages/components/Game';
import NoPage from './pages/NoPage';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/game" element={<Game />}></Route>
            <Route exact path="*" element={<NoPage />}></Route>
          </Routes>
        </div>
      );
  }
}

export default App;
