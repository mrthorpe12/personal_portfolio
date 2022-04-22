import React from "react";
import districtMap from "../images/school_district_map.PNG";

const Personal = () => {
    return (
        <div>
            <h1>Personal Projects</h1>
            <h2>Cartography</h2>
            <p>My initial interest in maps is what led me to the field of information science.  Below is an example of my work using ESRI's ArcGIS suite.</p>
            <img className='img-responsive' id="map" src={districtMap} alt="Map of St. Louis area school districts"></img>
            <h2>Front-End Development</h2>
            <p>Below is an example of a travel website I built using HTML/CSS, with some JavaScript functionalities included.</p>
            <a href="https://mrthorpe12.github.io/si539-final-project/">Site Link</a>
            <p>This semester, I built a website using ReactJS that uses an API to generate a list of rhymes or synonyms based on the user's input.</p>
            <a href="https://mrthorpe12.github.io/si579-hw5-react/">Site Link</a>
        </div>
    )
}
export default Personal;