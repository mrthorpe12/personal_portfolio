import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Routes, Route } from "react-router-dom";

import Background from './components/Background';
import PersonalProjects from './components/PersonalProjects';
import TeamProjects from './components/TeamProjects';
import Contact from './components/Contact';

import Graduate from './components/Graduate';
import Undergrad from './components/Undergrad';
import Secondary from './components/Secondary';

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
          <Route path='background' element={<Background />} />
          <Route path='personal' element={<PersonalProjects />} />
          <Route path='team' element={<TeamProjects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='graduate' element={<Graduate />} />
          <Route path='undergrad' element={<Undergrad />} />
          <Route path='secondary' element={<Secondary />} />
          <Route path="work" element={<Work />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
