import React from "react";
import { Accordion } from "react-bootstrap";

const Secondary = () => {
    return (
        <div>
            <h1>David H. Hickman High School</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Diploma with High Honors</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Cumulative GPA: 3.8</li>
                            <li>AP Courses:
                                <ul>
                                    <li>Calculus AB</li>
                                    <li>Capstone</li>
                                    <li>English Language/Composition</li>
                                    <li>English Literature/Composition</li>
                                    <li>Research</li>
                                    <li>Seminar</li>
                                    <li>US History</li>
                                    <li>World History</li>
                                    <li>World Literature</li>
                                </ul>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>College Board Capstone Scholar</Accordion.Header>
                    <Accordion.Body><p>Completed independent research project as part of year-long AP Research course.  Presented my findings before a district-wide panel.</p></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Secondary;