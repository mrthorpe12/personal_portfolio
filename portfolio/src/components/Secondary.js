import React from "react";
import { ListGroup } from "react-bootstrap";

const Secondary = () => {
    return (
        <div>
            <h1>David H. Hickman High School</h1>
            <p><strong>"Everybody is ignorant, only on different subjects."</strong> - Will Rogers</p>
            <ListGroup>
                <ListGroup.Item>Diploma with High Honors</ListGroup.Item>
                <ListGroup.Item>3.8 GPA</ListGroup.Item>
                <ListGroup.Item>AP Capstone Scholar</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Secondary;