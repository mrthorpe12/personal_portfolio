import React from "react";
import districtMap from "../images/school_district_map.PNG";
import si539final from "../images/si539_final_capture.JPG"
import tops from "../images/tops_capture.JPG"
import mtcf from "../images/mtcf_capture.JPG"

const Personal = () => {
    return (
        <div>
            <h1>Personal Projects</h1>
            <h2>Cartography</h2>
            <p>My initial interest in maps is what led me to the field of information science.  Below is an example of my work using ESRI's ArcGIS suite.</p>
            <img className='img-responsive' id="map" src={districtMap} alt="Map of St. Louis area school districts"></img>
            <h2>Front-End Development</h2>
            <p>Below is an example of a travel website I built using HTML/CSS, with some JavaScript functionalities included.</p>
            <img className='img-responsive' id="map" src={si539final} alt="SI 539 final project"></img>
            <br></br>
            <a href="https://mrthorpe12.github.io/si539-final-project/">Site Link</a>
            <p>As part of my undergrad internship, I built and tested features for the University of Wisconsin Traffic Operations and Safety Laboratory's
                Community Maps project.
            </p>
            <img className='img-responsive' id="map" src={tops} alt="TOPS website"></img>
            <br></br>
            <a href="https://transportal.cee.wisc.edu/partners/community-maps/crash/search/BasicSearch.do">Site Link</a>
            <p>During my first semester at the University of Michigan, I built and tested features for the University of Michigan Transportation Research Institute's
                Michigan Traffic Crash Facts website.
            </p>
            <img className='img-responsive' id="map" src={mtcf} alt="MTCF website"></img>
            <br></br>
            <a href="https://www.michigantrafficcrashfacts.org/querytool#q1;0;2021;;">Site Link</a>
        </div>
    )
}
export default Personal;