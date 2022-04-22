import React from "react";
import { Accordion } from 'react-bootstrap';

const Undergrad = () => {
    return (
        <div>
            <h1>University of Wisconsin - Madison</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>CS 200: Programming I</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Wrote and tested basic programs using Java.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>LIS 351: Intro to Digital Information</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Gained experience working with SQL datasets.</li>
                            <li>Wrote and published personal webpage on GitHub.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Undergrad;