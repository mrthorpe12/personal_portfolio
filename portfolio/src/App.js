import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Routes, Route } from "react-router-dom";

import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Hobbies from './components/Hobbies';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="work" element={<Work />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
