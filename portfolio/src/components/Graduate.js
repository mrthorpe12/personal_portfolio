import React from "react";
import { Accordion } from 'react-bootstrap';

const Graduate = () => {
    return (
        <div>
            <h1>University of Michigan - Ann Arbor</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>SI 501: Intro to Contextual Inquiry</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Covered the basic principles of contextual inquiry and consulting.</li>
                            <li>Worked as part of student-led team with real-world client based in Detroit, Michigan. Analyzed client's
                                organizational process and made recommendations as to how organizational process could be improved.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>SI 504: Servers, the Shell, and Git</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Studying the basic principles of working within the shell and using Git source-control software.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>SI 506: Programming I</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Wrote and tested scripts using Python language.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>SI 539: Web Design</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Learning the basic components of web design (HTML/CSS).</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>SI 579: Building Interactive Applications</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Learning how to build interactive applications using JS/React framework.</li>
                            <li>Studying augmented reality (AR) and virtual reality (VR) interfaces.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>SI 582: Intro to Interactive Design</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Covered the basic principles of interactive design (accessibility, prototyping, user testing, etc.).</li>
                            <li>Worked as part of student-led team to develop and test mock product using high-fidelity prototypes
                                (Figma).</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>SI 588: Fundamentals of Human Behavior</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Covered the fundamentals of human behavior (human perception, memory capacity/organization,
                                characteristics of reasoning/decision making).</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>SI 622: Needs Assessment and Usability Evaluation</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Studying the key concepts of evaluation. Covering methods used to determine the goals of a
                                system/service.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>SI 507: Intermediate Programming</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                Further developing core programming and software development skills, including the following: Applying basic algorithms and data structures,
                                accessing and processing data, debugging, testing, incorporating external libraries, and maintaining a functional development environment.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>SI 564: SQL & Databases</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                Studying basics of databases and SQL.  Course subjects include the following: data modelling, SQL Syntax, evaluation of different database systems for suitability, evaluation
                                of database performance, and use of a database in a multi-step analysis process.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>SI 664: Database Application Design</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                Studying basics of database management systems (DBMS).  Course covers theoretical and practical aspects of DBMS, including database design, use,
                                and implementation using SQL.  Course taught using Django/MySQL.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>SI 669: Developing Mobile Experiences</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                Building mobile applications using React Native.  Course subjects include standard testing, monitoring, and debugging.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Graduate;