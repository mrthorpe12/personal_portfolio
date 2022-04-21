import React from "react";
import { ListGroup } from 'react-bootstrap';

const Graduate = () => {
    return (
        <div>
            <h1>University of Michigan - Ann Arbor</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <h2>SI 501: Intro to Contextual Inquiry</h2>
            <ListGroup>
                <ListGroup.Item>Covered the basic principles of contextual inquiry and consulting</ListGroup.Item>
                <ListGroup.Item>Worked as part of student-led team with real-world client based in Detroit, Michigan. Analyzed client's
                    organizational process and made recommendations as to how organizational process could be improved.</ListGroup.Item>
            </ListGroup>
            <h2>SI 504: Servers, the Shell, and Git</h2>
            <ListGroup>
                <ListGroup.Item>Studying the basic principles of working within the shell and using Git source-control software.</ListGroup.Item>
            </ListGroup>
            <h2>SI 506: Programming I</h2>
            <ListGroup>
                <ListGroup.Item>Wrote and tested scripts using Python language.</ListGroup.Item>
            </ListGroup>
            <h2>SI 539: Web Design</h2>
            <ListGroup>
                <ListGroup.Item>Learning the basic components of web design (HTML/CSS).</ListGroup.Item>
            </ListGroup>
            <h2>SI 579: Building Interactive Applications</h2>
            <ListGroup>
                <ListGroup.Item>Learning how to build interactive applications using JS/React framework.</ListGroup.Item>
                <ListGroup.Item>Studying augmented reality (AR) and virtual reality (VR) interfaces.</ListGroup.Item>
            </ListGroup>
            <h2>SI 582: Intro to Interactive Design</h2>
            <ListGroup>
                <ListGroup.Item>Covered the basic principles of interactive design (accessibility, prototyping, user testing, etc.).
                </ListGroup.Item>
                <ListGroup.Item>Worked as part of student-led team to develop and test mock product using high-fidelity prototypes
                    (Figma).</ListGroup.Item>
            </ListGroup>
            <h2>SI 588: Fundamentals of Human Behavior</h2>
            <ListGroup>
                <ListGroup.Item>Covered the fundamentals of human behavior (human perception, memory capacity/organization,
                    characteristics of reasoning/decision making).</ListGroup.Item>
            </ListGroup>
            <h2>SI 622: Needs Assessment and Usability Evaluation</h2>
            <ListGroup>
                <ListGroup.Item>Studying the key concepts of evaluation. Covering methods used to determine the goals of a
                    system/service.</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Graduate;