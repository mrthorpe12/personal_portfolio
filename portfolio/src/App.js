import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
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
  const [backgroundLabel, setBackgroundLabel] = useState('Background Information');
  const [personalLabel, setPersonalLabel] = useState('Personal Projects');
  const [teamLabel, setTeamLabel] = useState('Team Projects');
  const [contactLabel, setContactLabel] = useState('Contact Me');
  const [graduateLabel, setGraduateLabel] = useState('Graduate');
  const [undergradLabel, setUndergradLabel] = useState('Undergraduate');
  const [secondaryLabel, setSecondaryLabel] = useState('Secondary');
  const [workLabel, setWorkLabel] = useState('Work');
  const [hobbiesLabel, setHobbiesLabel] = useState('Hobbies & Interests');
  const [homeLabel, setHomeLabel] = useState('Homepage');

  return (
    <div className="App">
      <header>
        <Navigation backgroundLabel={backgroundLabel} personalLabel={personalLabel} teamLabel={teamLabel} contactLabel={contactLabel} graduateLabel={graduateLabel} undergradLabel={undergradLabel} secondaryLabel={secondaryLabel} workLabel={workLabel} hobbiesLabel={hobbiesLabel} homeLabel={homeLabel} />
      </header>
      <main>
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
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; Maxwell Thorpe 2022</p>
      </footer>
    </div>
  );
}

export default App;
