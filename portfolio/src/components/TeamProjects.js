import React from "react";
import affinity from "../images/ecoworks_affinity.PNG";
import ecoworksLogo from "../images/ecoworks_logo.webp";

const Team = () => {
    return (
        <div>
            <h1>Team Projects</h1>
            <h2>SI 501 Consulting Project</h2>
            <p>As part of my first semester coursework at UMSI, I worked as part of a student-led team to help EcoWorks, a Detroit-area non-profit, improve their organizational process.  Founded in 1981, EcoWorks is dedicated to helping low-income homeowners in Metro Detroit make their homes more energy-efficient.  Our team interviewed the organization's employees, as well as homeowners who had been helped by EcoWorks, and succeeded in putting together a plan for how EcoWorks could more efficiently manage their operations.</p>
            <img className='img-responsive' src={ecoworksLogo} alt="EcoWorks logo"></img>
            <img className='img-responsive' id="affinity" src={affinity} alt="Affinity wall"></img>
            <h2>SI 582 Mobile App Prototype</h2>
            <p>For SI 582 (intro to interactive design), I worked as part of a student-led team to design a mobile app that would remind users to take periodic breaks while working remotely.  Our team developed rough sketches of how the product ought to look, and then used Figma to create a high-fidelity prototype based on these sketches.</p>
            {/* insert images here */}
            <h2>SI 622 Consulting Project</h2>
            <p>This semester, I worked as part of a student-led team to analyze an external client's software platform.  As a team, we conducted user interviews and usability testing in order to determine which of the platform's features needed improvement.</p>
        </div>
    )
}

export default Team;