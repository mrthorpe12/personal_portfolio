import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xbjwznqr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                /><label htmlFor="email">
                    Email Address:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
            {/* <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </div>
    )
}

export default Contact;