import React from "react";
import { ListGroup } from 'react-bootstrap';

const Undergrad = () => {
    return (
        <div>
            <h1>University of Wisconsin - Madison</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <h2>CS 200: Programming I</h2>
            <ListGroup>
                <ListGroup.Item>Wrote and tested basic programs using Java</ListGroup.Item>
            </ListGroup>
            <h2>LIS 351: Intro to Digital Information</h2>
            <ListGroup>
                <ListGroup.Item>Gained experience working with SQL datasets</ListGroup.Item>
                <ListGroup.Item>Wrote and published personal webpage on GitHub</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Undergrad;