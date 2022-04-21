import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Work = () => {
    return (
        <div>
            <h1>Work History</h1>
            <p><strong>"No man goes before his time - unless the boss leaves early."</strong> - Groucho Marx</p>
            <h2>Software Engineer, University of Michigan Transportation Research Institute</h2>
            <ListGroup>
                <ListGroup.Item>Developed traffic crash analysis datasets using Python/XML</ListGroup.Item>
                <ListGroup.Item>Built process for generating PDF traffic crash analyses using Python</ListGroup.Item>
                <ListGroup.Item><a href="https://www.michigantrafficcrashfacts.org/">Site Link</a></ListGroup.Item>
            </ListGroup>
            <h2>GIS Developer, UW Traffic Operations and Safety (TOPS) Laboratory</h2>
            <ListGroup>
                <ListGroup.Item>Independently developed Java programs for real-time “crash map” of statewide incidents
                </ListGroup.Item>
                <ListGroup.Item>Extended geo-based analysis features in JavaScript & HTML
                    including “density” layers showing frequency of traffic crashes in given areas
                </ListGroup.Item>
                <ListGroup.Item>Wrote and published entire user guide for system users (Wisconsin state/county law enforcement)</ListGroup.Item>
                <ListGroup.Item><a href="https://transportal.cee.wisc.edu/partners/community-maps/">Site Link</a></ListGroup.Item>
            </ListGroup>
            <h2>GIS Intern, Boone County Fire Protection District</h2>
            <ListGroup>
                <ListGroup.Item>Used orthophoto imagery and LiDAR to update County geospatial databases
                    of structural footprints, forested areas, hydrology, & contours</ListGroup.Item>
                <ListGroup.Item>Managed datasets in ArcMap & ArcEditor supporting mapping products & parcel information viewer</ListGroup.Item>
            </ListGroup>
            <h2>Apprentice Geospatial Analyst, Center for Geospatial Intelligence (CGI)</h2>
            <ListGroup>
                <ListGroup.Item>Used ESRI software to update base maps of global strategic areas</ListGroup.Item>
                <ListGroup.Item>Conducted quality-control processes on SQL datasets</ListGroup.Item>
                <ListGroup.Item>Obtained required federal security clearance. Specific nature of tasks confidential </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Work;